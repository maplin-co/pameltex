const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const systemPrompt = require('../config/systemPrompt');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateContent = async (userPrompt) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Combine system prompt with user prompt
        const fullPrompt = `${systemPrompt}\n\nUser Query: ${userPrompt}\n\nAssistant Response:`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error('Error generating content with Gemini:', error);
        throw error;
    }
};

module.exports = { generateContent };
