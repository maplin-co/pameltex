# Pameltex Assistant Backend

This is the backend service for the Pameltex chatbot assistant, powered by Google Gemini and Supabase.

## Setup

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Copy `.env.example` to `.env` and fill in your API keys:
    ```bash
    cp .env.example .env
    ```
    - `GEMINI_API_KEY`: Your Google Gemini API key.
    - `SUPABASE_URL`: Your Supabase project URL.
    - `SUPABASE_ANON_KEY`: Your Supabase anonymous key.

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## API Endpoints

-   `POST /api/generate`: Generates a response from the AI assistant.
    -   **Body**: `{ "prompt": "User's message here" }`
    -   **Response**: `{ "response": "AI's response here" }`

## Features

-   **System Prompt**: The improved system prompt in `src/config/systemPrompt.js` includes detailed information about Pameltex services, team, and contact details.
-   **Gemini Integration**: Uses Google's Gemini Pro model for generating responses.
-   **Supabase Integration**: Basic setup included for logging requests (optional).

## Deployment

To deploy to a service like Render or Vercel, ensure you set the environment variables in your deployment settings.
