import { useState } from "react";
import { uploadPDF } from "../services/api";

const FileUpload = () => {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {
            setMessage("Please select a PDF");
            return;
        }

        try {

            setLoading(true);
            setMessage("");

            const data = await uploadPDF(file); // here api call 
            console.log(data)

            setMessage(
                `${data.fileName} uploaded successfully. ${data.totalChunks} chunk(s) created.`
            );

        } catch (error) {

            setMessage(error.message);

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="card">

            <h2>Upload Document</h2>

            <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button
                onClick={handleUpload}
                disabled={loading}
            >
                {loading ? "Uploading..." : "Upload PDF"}
            </button>

            {message && (
                <p>{message}</p>
            )}

        </div>
    );
};

export default FileUpload;