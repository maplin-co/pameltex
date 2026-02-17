# Luna - Pameltex AI Assistant Backend

Intelligent chatbot backend for Pameltex Psychosocial & Counseling Services, powered by Google Gemini AI.

## Features

✅ **Comprehensive Knowledge Base** - Built-in information about all Pameltex services
✅ **Lead Collection** - Automatically captures and stores user contact information  
✅ **Email Notifications** - Instant email alerts when new leads are captured
✅ **Conversation History** - Maintains context across chat sessions
✅ **Bilingual Support** - English and Setswana language support
✅ **Database Integration** - Stores leads and chat logs in Supabase

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
# Supabase Configuration
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# Google Gemini API
GEMINI_API_KEY=your-gemini-api-key

# Server Configuration
PORT=3000

# Email Configuration (for lead notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@pameltex.com
```

### 3. Set Up Email (Gmail Example)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the generated password
4. Use this password in `EMAIL_PASSWORD`

### 4. Run the Server

**Development:**

```bash
npm run dev
```

**Production:**

```bash
npm start
```

## API Endpoints

### GET /

Returns service information and available endpoints

### GET /health

Health check endpoint

### POST /api/chat

Chat with Luna AI assistant

**Request:**

```json
{
  "message": "I need help with anxiety",
  "sessionId": "optional-session-id"
}
```

**Response:**

```json
{
  "response": "I understand you're dealing with anxiety...",
  "sessionId": "session_1234567890"
}
```

### POST /api/lead

Submit lead information

**Request:**

```json
{
  "name": "John Doe",
  "phone": "+267 72 123 456",
  "email": "john@example.com",
  "interest": "Individual Therapy",
  "message": "I'd like to book a session"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Thank you! We've received your information...",
  "leadId": "uuid"
}
```

## Database Schema

### Supabase Tables

**leads** table:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  interest TEXT,
  message TEXT,
  source TEXT DEFAULT 'Website Chatbot',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**chat_logs** table (optional):

```sql
CREATE TABLE chat_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Deployment

### Deploy to Render

1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables in Render dashboard
4. Deploy!

The `render.yaml` file is already configured for automatic deployment.

## Features in Detail

### 🤖 AI-Powered Responses

Luna uses Google Gemini AI with a comprehensive system prompt containing:

- Complete service information
- Booking procedures
- FAQs
- Contact details
- Cultural sensitivity guidelines

### 📧 Email Notifications

When a lead is captured, an HTML-formatted email is sent to `info@pameltex.com` containing:

- Contact information
- Service interest
- User's message
- Timestamp

### 💾 Lead Storage

Leads are stored in Supabase with:

- Automatic timestamping
- Source tracking
- Optional email field
- Service interest categorization

### 🗣️ Conversation Context

The chatbot maintains conversation history for each session, allowing for:

- Natural follow-up questions
- Context-aware responses
- Personalized interactions

## Troubleshooting

### Email Not Sending

1. Check EMAIL_USER and EMAIL_PASSWORD are set
2. Verify Gmail App Password is correct
3. Check server logs for specific error messages
4. Test with: `node -e "require('./src/services/email').verifyEmailConfig()"`

### Database Connection Issues

1. Verify SUPABASE_URL and SUPABASE_ANON_KEY
2. Check Supabase project is active
3. Ensure tables exist (see schema above)

### AI Responses Not Working

1. Verify GEMINI_API_KEY is valid
2. Check API quota hasn't been exceeded
3. Review error logs for specific issues

## Support

For issues or questions:

- Email: <info@pameltex.com>
- Phone: +267 72 534 203

## License

ISC
