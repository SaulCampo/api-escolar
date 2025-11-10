
import Estudiante from "../models/Estudiante.js";

export const crear = async (req, res) => {
  try {
    const doc = await Estudiante.create(req.body);
    res.status(201).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const listar = async (req, res) => {
  try {
    const {
      q,
      curso,
      minProm,
      maxProm,
      page = 1,
      limit = 10,
      sort = "-createdAt"
    } = req.query;

    const filtro = {};
    if (q) {
      const regex = new RegExp(q, "i");
      filtro.$or = [
        { nombres: regex },
        { apellidos: regex },
        { cedula: regex },
        { materias: regex }
      ];
    }
    if (curso) filtro.curso = curso;
    if (minProm) filtro.promedio = { ...(filtro.promedio||{}), $gte: Number(minProm) };
    if (maxProm) filtro.promedio = { ...(filtro.promedio||{}), $lte: Number(maxProm) };

    const skip = (Number(page) - 1) * Number(limit);
    const [data, total] = await Promise.all([
      Estudiante.find(filtro).sort(sort).skip(skip).limit(Number(limit)),
      Estudiante.countDocuments(filtro)
    ]);

    res.json({ page: Number(page), limit: Number(limit), total, data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const detalle = async (req, res) => {
  try {
    const doc = await Estudiante.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "No encontrado" });
    res.json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const doc = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: "No encontrado" });
    res.json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    const doc = await Estudiante.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "No encontrado" });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
