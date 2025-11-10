
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import estudianteRoutes from "./routes/estudiante.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/estudiantes", estudianteRoutes);

// Swagger
const swaggerPath = path.join(__dirname, "..", "swagger.json");
let swaggerDoc = {};
if (fs.existsSync(swaggerPath)) {
  swaggerDoc = JSON.parse(fs.readFileSync(swaggerPath, "utf-8"));
}
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Salud
app.get("/", (_, res) => res.json({ ok: true, name: "API Escolar" }));

export default app;
