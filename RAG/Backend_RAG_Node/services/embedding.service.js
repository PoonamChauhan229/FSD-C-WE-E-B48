import { GoogleGenAI } from "@google/genai";
console.log("process.env.GEMINI_API_KEY",process.env.GEMINI_API_KEY)

const ai = new GoogleGenAI({
    apiKey: "Your GEMINI API KEY",
});

const generateEmbedding = async (text) => {
    try {
        const response = await ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: text,
        });

        return response.embeddings[0].values;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default generateEmbedding;