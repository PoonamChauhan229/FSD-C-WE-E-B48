import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import dns from 'dns'
import ragRoutes from "./routes/rag.routes.js";
dotenv.config();
dns.setServers(['8.8.8.8','8.8.4.4'])


console.log("Test",process.env.MONGO_URI,process.env.GEMINI_API_KEY)
const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/rag", ragRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        message: "Node RAG Backend Running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});