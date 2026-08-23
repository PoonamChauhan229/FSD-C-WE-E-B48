import { useState } from "react";
import { askQuestion } from "../services/api";

const QuestionInput = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [source, setSource] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {

        if (!question.trim()) {
            return;
        }

        try {

            setLoading(true);
            setAnswer("");
            setSource("");

            const data = await askQuestion(question); // /ask

            setAnswer(data.answer);

            if (data.sources?.length) {
                setSource(data.sources[0].title);
            }

        } catch (error) {

            setAnswer(error.message);

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="card">

            <h2>Ask a Question</h2>

            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask something about your document..."
                rows="4"
            />

            <button
                onClick={handleAsk}
                disabled={loading}
            >
                {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
                <div className="answer">

                    <h3>Answer</h3>

                    <p>{answer}</p>

                    {source && (
                        <small>
                            Source: {source}
                        </small>
                    )}

                </div>
            )}

        </div>
    );
};

export default QuestionInput;