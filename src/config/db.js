
import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI no definida en .env");
    process.exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log("🗄️  Conectado a MongoDB");
  } catch (err) {
    console.error("❌ Error conectando a MongoDB:", err.message);
    process.exit(1);
  }
}
