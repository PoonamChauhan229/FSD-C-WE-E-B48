import express from "express";
import upload from "../middleware/upload.middleware.js";
import { uploadPDF } from "../controllers/rag.controller.js";
import { askQuestion } from "../controllers/ask.controller.js";


const router = express.Router();

router.post("/upload", upload.single("pdf"), uploadPDF);
router.post("/ask", askQuestion);

export default router;