
import mongoose from "mongoose";

const EstudianteSchema = new mongoose.Schema({
  cedula: { type: String, required: true, unique: true, trim: true },
  nombres: { type: String, required: true, index: true, trim: true },
  apellidos: { type: String, required: true, index: true, trim: true },
  curso: { type: String, required: true, index: true, trim: true }, // p.ej. "3ro BGU"
  promedio: { type: Number, default: 0, min: 0, max: 20 },
  materias: [{ type: String }]
}, { timestamps: true });

export default mongoose.model("Estudiante", EstudianteSchema);
