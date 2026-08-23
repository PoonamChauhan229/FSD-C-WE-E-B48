import FileUpload from "./components/FileUpload";
import QuestionInput from "./components/QuestionInput";
import "./App.css";

function App() {

    return (
        <div className="container">

            <h1>RAG Document Assistant</h1>

            <FileUpload />

            <QuestionInput />

        </div>
    );
}

export default App;