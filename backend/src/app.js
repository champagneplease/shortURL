import express from "express";
import router from "./routes/apiRoutes.js";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Middelware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://short-url-eight-rho.vercel.app",
      "https://short-l1dmgsn9d-champagnepleases-projects.vercel.app",
    ],
    credentials: true,
  }),
);
app.use("/", router);

connectDB()
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`Server ON: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error conectando MongoDB:", err.message);
    process.exit(1);
  });
