import mongoose from "mongoose"
const { Schema } = mongoose;

const articuloSchema = new Schema({
  idArticulo: { type: Number, required: true },
  nombre: { type: String, required: true },
  tipo: { type: String, enum: ['vehiculo', 'oro', 'electrodomestico', 'maquinaria', 'herramienta'], required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
});
const Articulo = mongoose.model('Articulo', articuloSchema);

export default Articulo;


