// question + retrieved chunks

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "Your GEMINI API KEY"
});

const generateAnswer = async (question, documents) => { //documents >> results retrived from search
    //context(search results) + prompt(question)
    try {

        const context = documents
            .map((doc) => doc.content)
            .join("\n\n");

        const prompt = `
                            You are a helpful AI assistant.

                            Answer the user's question using ONLY the context provided below.

                            If the answer cannot be found in the context, say:
                            "I don't have enough information in the provided document."

                            Context:${context}

                            Question:${question}

                            Answer:
                            `;
        // llm 
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt
        });

        return response.text;

    } catch (error) {
        console.error("LLM Error:", error);
        throw error;
    }
};

export default generateAnswer;