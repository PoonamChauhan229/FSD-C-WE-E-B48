import fs from "fs";
import {PDFParse} from "pdf-parse";

const extractTextFromPDF = async (filePath) => {
    try {

        const buffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: buffer });

       
        const result = await parser.getText();
	    // console.log(result.text)
        return result.text;

    } catch (error) {
        console.log(error)
        throw new Error("Failed to read PDF");
    }
};

export default extractTextFromPDF;