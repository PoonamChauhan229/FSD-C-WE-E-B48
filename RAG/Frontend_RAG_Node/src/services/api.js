const API_URL = "http://localhost:5000/api/rag";

export const uploadPDF = async (file) => {

    const formData = new FormData();

    formData.append("pdf", file); // "pdf" === upload.single("pdf")

    const response = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Upload failed");
    }

    return data;
};


export const askQuestion = async (question) => {

    const response = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Question failed");
    }

    return data;
};