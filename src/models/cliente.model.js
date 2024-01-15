import mongoose from "mongoose";
const { Schema } = mongoose;

const clienteSchema = new Schema({
  identificacion: { type: Number, required: true },
  nombres: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  fecha_nac: { type: Date, required: true },
});

const Cliente = mongoose.model('Cliente', clienteSchema);


export default Cliente;
