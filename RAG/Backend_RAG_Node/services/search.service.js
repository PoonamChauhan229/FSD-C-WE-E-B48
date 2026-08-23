import Document from "../models/document.model.js";
import generateEmbedding from "./embedding.service.js";

const searchDocuments = async (question) => {

    // Generate embedding for the user's question
    const queryEmbedding = await generateEmbedding(question);

    // Perform vector search
    const results = await Document.aggregate([
        {
            $vectorSearch: {
                index: "vector_index",
                path: "embedding",
                queryVector: queryEmbedding,
                numCandidates: 100,
                limit: 5
            }
        },
        {
            $project: {
                _id: 0,
                title: 1,
                content: 1,
                score: {
                    $meta: "vectorSearchScore"
                }
            }
        }
    ]);

    return results;
};

export default searchDocuments;