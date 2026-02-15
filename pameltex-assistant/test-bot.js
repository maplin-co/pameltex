const { generateContent } = require('./src/services/gemini');

const testQueries = [
    "Hello, who are you?",
    "What services do you offer?",
    "How can I book an appointment?",
    "Is my conversation confidential?",
    "Do you treat anxiety?"
];

async function runTests() {
    console.log("Starting Chatbot Tests...\n");

    for (const query of testQueries) {
        console.log(`User: ${query}`);
        try {
            const response = await generateContent(query);
            console.log(`BotArgs: ${response}\n`);
        } catch (error) {
            console.error(`Error processing query "${query}":`, error.message);
        }
        console.log("-".repeat(50) + "\n");
    }
}

runTests();
