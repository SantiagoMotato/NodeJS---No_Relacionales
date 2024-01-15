import mongoose from "mongoose"
const { Schema } = mongoose;

const alquilerSchema = new Schema({
  idAlquiler: { type: Number, required: true },
  valor: { type: Number, required: true },
  fecha: { type: Date, required: true },
  meses: { type: Number, required: true },
  descripcion: { type: String, required: true },
  interes: { type: Number, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  articulo: { type: Schema.Types.ObjectId, ref: 'Articulo', required: true },
});

const Alquiler = mongoose.model('Alquiler', alquilerSchema);

export default Alquiler;
