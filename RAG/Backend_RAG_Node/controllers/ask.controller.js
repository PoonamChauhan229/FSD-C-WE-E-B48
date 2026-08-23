import searchDocuments from "../services/search.service.js";
import generateAnswer from "../services/llm.service.js";
const askQuestion = async (req, res) => {

    try {

        const { question } = req.body;
        if (!question) {
            return res.status(400).json({
                success: false,
                message: "Question is required"
            });
        }
        //Search MongoDB
        const results = await searchDocuments(question);

        //Generate answer using retrieved documents
        const answer = await generateAnswer(question, results);

        res.status(200).json({
            success: true,
            question,
            matches: results,
            matchesCount:results.length,
            answer,
            sources: results.map((doc) => ({
                title: doc.title,
                score: doc.score
            }))
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export { askQuestion };