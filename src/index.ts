import express from "express";
import { connectDB } from "./config/db";
import snippetRoutes from "./routes/snippets";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

connectDB();

app.get("/", (req, res) => res.send("Hello World"));
app.use("/snippets", snippetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const host = "localhost";
  console.log(`Server running at http://${host}:${PORT}`);
});
