import extractTextFromPDF from "../services/pdf.service.js";
import splitText from "../services/chunk.service.js";
import generateEmbedding from "../services/embedding.service.js";
import storeChunks from "../services/vector.service.js";
import searchDocuments from "../services/search.service.js";
import generateAnswer from "../services/llm.service.js";

const uploadPDF = async (req, res) => {
    try {

        const filePath = req.file.path; // comes form uploadmiddleware.js

        const extractedText = await extractTextFromPDF(filePath);

        const chunks = await splitText(extractedText);
        const embedding = await generateEmbedding(chunks[0].pageContent);
        const storedChunks = await storeChunks(
            req.file.originalname,
            chunks
        );

        res.status(200).json({
            success: true,
            fileName: req.file.originalname,
            extractedText,
            totalChunks: chunks.length,
            firstChunk: chunks[0].pageContent,
            chunkPreview: chunks.slice(0, 3).map(chunk => chunk.pageContent),
            embeddingLength: embedding.length,
            chunks: storedChunks
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export { uploadPDF };