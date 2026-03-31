const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const systemPrompt = require('../config/systemPrompt');

let genAI = null;

const getGenAI = () => {
    if (!genAI) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not configured');
        }
        genAI = new GoogleGenerativeAI(apiKey);
    }
    return genAI;
};

/**
 * Generate a response using Gemini AI with conversation history support
 * @param {string} userPrompt - The user's current message
 * @param {Array} history - Previous conversation turns [{role, content}]
 * @returns {Promise<string>} - The AI-generated response
 */
const generateContent = async (userPrompt, history = []) => {
    try {
        const ai = getGenAI();
        const model = ai.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: systemPrompt
        });

        // Build conversation history in Gemini format
        const formattedHistory = history
            .filter(h => h.role === 'user' || h.role === 'model')
            .map(h => ({
                role: h.role === 'assistant' ? 'model' : h.role,
                parts: [{ text: h.content }]
            }));

        // Start a chat session with history
        const chat = model.startChat({
            history: formattedHistory
        });

        const result = await chat.sendMessage(userPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Gemini API error:', error.message);
        throw error;
    }
};

/**
 * Check if Gemini is available (API key configured)
 */
const isGeminiAvailable = () => {
    return !!(process.env.GEMINI_API_KEY);
};

module.exports = { generateContent, isGeminiAvailable };
