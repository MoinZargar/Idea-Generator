import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"
import { apiError } from "./apiError.js";

dotenv.config({
    path: '.env'
})
const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const genAi = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text()

    } catch (error) {
        throw new apiError(500,"Something went wrong while generating response")
    }
}

export { genAi }