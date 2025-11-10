
import { Router } from "express";
import * as ctrl from "../controllers/estudiante.controller.js";

const router = Router();

router.post("/", ctrl.crear);
router.get("/", ctrl.listar);
router.get("/:id", ctrl.detalle);
router.put("/:id", ctrl.actualizar);
router.delete("/:id", ctrl.eliminar);

export default router;
