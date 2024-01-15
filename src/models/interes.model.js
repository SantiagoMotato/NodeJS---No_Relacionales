import mongoose from "mongoose"
const { Schema } = mongoose;

const interesSchema = new Schema({
  idInteres: { type: Number, required: true },
  mes: { type: Number, required: true },
  fecha: { type: Date, required: true },
  valor: { type: Number, required: true },
  alquiler: { type: Schema.Types.ObjectId, ref: 'Alquiler', required: true },
});


const Interes = mongoose.model('Interes', interesSchema);

export default Interes;