const express = require('express');
const cors = require('cors');
const { generateContent } = require('./services/gemini');
const supabase = require('./config/supabase');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Luna (Pameltex Assistant) Backend is running!');
});

app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const aiResponse = await generateContent(prompt);

        // Example Supabase usage: Log request
        const { data, error } = await supabase
            .from('requests')
            .insert([
                { prompt: prompt, response: aiResponse }
            ]);

        if (error) {
            console.error('Supabase logging error:', error);
        }

        res.json({ response: aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Luna (Pameltex Assistant) listening at http://localhost:${port}`);
});
