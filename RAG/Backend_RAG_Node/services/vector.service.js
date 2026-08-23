import Document from "../models/document.model.js";
import generateEmbedding from "./embedding.service.js";

const storeChunks = async (title, chunks) => {

    const response = [];

    for (let i = 0; i < chunks.length; i++) {

        const content = chunks[i].pageContent;

        // Embedding service here >> to get the embedding
        const embedding = await generateEmbedding(content);

        // Mongodb menthod >> save in DB
        const savedDocument = await Document.create({
            title,
            content,
            embedding
        });

        // not needed >>

        response.push({
            chunkNumber: i + 1,
            characters: content.length,
            content,
            embeddingDimension: embedding.length,
            embeddingPreview: embedding.slice(0, 5),
            mongoId: savedDocument._id
        });
    }

    return response;
};

export default storeChunks;