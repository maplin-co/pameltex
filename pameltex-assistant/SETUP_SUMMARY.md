# Pameltex Chatbot - Setup Summary

## ✅ What's Been Implemented

### 1. **Comprehensive Knowledge Base**

The chatbot now has complete information about:

- All Pameltex services (Individual Therapy, Couples Therapy, Corporate Services, Consultancy)
- Detailed booking procedures
- Team information
- Contact details
- FAQs
- Pricing information
- Office hours
- Bilingual support (English/Setswana)

### 2. **Lead Collection System**

- Automatically collects: Name, Phone, Email (optional), Service Interest, Message
- Natural conversation flow for gathering information
- Stores leads in Supabase database
- Validates required fields

### 3. **Email Notifications**

- Sends formatted HTML emails to <info@pameltex.com>
- Includes all lead information
- Professional email template
- Timestamp in Botswana timezone

### 4. **Conversation Management**

- Maintains chat history per session
- Context-aware responses
- Natural follow-up conversations

## 📋 Next Steps to Complete Setup

### 1. Configure Email in Render

Add these environment variables in your Render dashboard:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@pameltex.com
```

**To get Gmail App Password:**

1. Go to Google Account → Security
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate password for "Mail"
5. Copy the 16-character password
6. Use this in EMAIL_PASSWORD

### 2. Create Supabase Tables

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Leads table
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

-- Chat logs table (optional)
CREATE TABLE chat_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Update Frontend Chatbot

Update your frontend to use the new API endpoints:

**Chat Endpoint:** `POST /api/chat`

```javascript
{
  "message": "user message here",
  "sessionId": "optional-session-id"
}
```

**Lead Endpoint:** `POST /api/lead`

```javascript
{
  "name": "John Doe",
  "phone": "+267 72 123 456",
  "email": "john@example.com",
  "interest": "Individual Therapy",
  "message": "I'd like to book a session"
}
```

## 🎯 How It Works

1. **User starts chat** → Luna greets them warmly
2. **User asks questions** → Luna provides detailed answers from knowledge base
3. **User shows interest** → Luna naturally asks for contact info
4. **User provides details** → System saves to database + sends email
5. **You receive notification** → Follow up with the lead!

## 📧 Email Notification Example

When a lead is captured, you'll receive an email like:

```
Subject: 🔔 New Lead from Website Chatbot - John Doe

Contact Information:
Name: John Doe
Email: john@example.com
Phone: +267 72 123 456

Interest:
Individual Therapy

Message/Inquiry:
I'm dealing with anxiety and would like to schedule a session.

Captured: 17/02/2026, 15:30 (Botswana Time)
```

## 🚀 Deployment Status

- ✅ Code pushed to GitHub
- ⏳ Waiting for Render deployment
- ⏳ Need to configure email environment variables
- ⏳ Need to create Supabase tables

## 📞 Testing

Once deployed, test the chatbot by:

1. Asking about services
2. Requesting booking information
3. Providing your contact details
4. Check if email arrives at <info@pameltex.com>

## 🔧 Troubleshooting

**If emails don't send:**

- Check EMAIL_USER and EMAIL_PASSWORD are set in Render
- Verify Gmail App Password is correct
- Check Render logs for errors

**If leads don't save:**

- Verify Supabase tables exist
- Check SUPABASE_URL and SUPABASE_ANON_KEY
- Review Render logs

## 📚 Documentation

Full documentation available in:
`pameltex-assistant/README.md`

---

**Questions?** Contact the development team or refer to the README.
