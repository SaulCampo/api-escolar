
import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`✅ Servidor listo en http://localhost:${PORT}`);
    console.log(`📚 Swagger en http://localhost:${PORT}/docs`);
  });
}

start();
