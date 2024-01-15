import express from 'express';
import connectDB from './src/database/conexion.js';
import clienteRoutes from "./src/routers/cliente.router.js";
import articulosRoutes from "./src/routers/articulo.router.js"
import interesRoutes from "./src/routers/interes.router.js"
import alquilerRoutes from "./src/routers/alquiler.router.js"
import bodyParser from 'body-parser';
import validator from "./src/routers/sa.validator.router.js"
import dotenv from 'dotenv';

const app = express();


dotenv.config();

connectDB();

app.get('/', (req, res) => {
  res.send("Hello Bitches!!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/sa/usuario',validator);
app.use('/sa/clientes', clienteRoutes);
app.use('/sa/articulos', articulosRoutes);
app.use('/sa/interes', interesRoutes);
app.use('/sa/alquiler', alquilerRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


