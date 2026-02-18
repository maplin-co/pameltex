# 🚀 Pameltex Chatbot - Quick Setup Reference

## ✅ What You Have

### Supabase Credentials

- **Project ID**: `cwxlivyzatiovorlfkyk`
- **URL**: `https://cwxlivyzatiovorlfkyk.supabase.co`
- **Anon Key**: `<see .env file or Supabase dashboard>` (already in .env — do NOT commit to git)
- **Secret Key**: `<see Supabase dashboard → Settings → API>` (for admin tasks — never commit this)

### Database Setup Files

- ✅ `database/setup.sql` - Complete database schema
- ✅ `database/SUPABASE_SETUP.md` - Detailed setup guide
- ✅ `.env` - Updated with Supabase credentials

## 📋 Quick Setup Checklist

### 1. Set Up Supabase Database (5 minutes)

1. Go to: <https://supabase.com/dashboard/project/cwxlivyzatiovorlfkyk/sql>
2. Click "New Query"
3. Copy ALL content from `pameltex-assistant/database/setup.sql`
4. Paste and click "Run"
5. Verify success ✅

### 2. Configure Email (5 minutes)

**Get Gmail App Password:**

1. Google Account → Security → 2FA (enable it)
2. Security → App passwords → Generate for "Mail"
3. Copy the 16-character password

**Update .env file:**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### 3. Add Missing API Keys

**Update .env file:**

```env
GEMINI_API_KEY=your-gemini-api-key-here
```

### 4. Test Locally (2 minutes)

```bash
cd pameltex-assistant
npm install
npm start
```

Visit: <http://localhost:3000>
Should see: Service info JSON

### 5. Deploy to Render

**Add Environment Variables in Render:**

```env
SUPABASE_URL=https://cwxlivyzatiovorlfkyk.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key-from-dashboard
GEMINI_API_KEY=your-gemini-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@pameltex.com
```

**Verify Render Settings:**

- Root Directory: `pameltex-assistant`
- Build Command: `npm install`
- Start Command: `npm start`

## 🧪 Testing

### Test 1: Database Connection

In Supabase SQL Editor:

```sql
INSERT INTO leads (name, phone, interest) 
VALUES ('Test User', '+267 72 123 456', 'Test');

SELECT * FROM leads ORDER BY created_at DESC LIMIT 1;
```

### Test 2: API Endpoints

**Health Check:**

```
GET https://your-render-url.onrender.com/health
```

**Chat:**

```
POST https://your-render-url.onrender.com/api/chat
Body: {"message": "Hello"}
```

**Lead:**

```
POST https://your-render-url.onrender.com/api/lead
Body: {
  "name": "Test",
  "phone": "+267 72 123 456",
  "interest": "Individual Therapy"
}
```

### Test 3: Email Notification

Submit a lead via API → Check <info@pameltex.com> for email

## 📊 Monitoring

### View Leads in Supabase

1. Go to: <https://supabase.com/dashboard/project/cwxlivyzatiovorlfkyk/editor>
2. Select "leads" table
3. View all captured leads

### View Chat Logs

1. Same location
2. Select "chat_logs" table
3. View conversation history

## 🎯 API Endpoints

**Base URL (Production):** `https://your-app.onrender.com`
**Base URL (Local):** `http://localhost:3000`

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | Service info |
| GET | `/health` | Health check |
| POST | `/api/chat` | Chat with Luna |
| POST | `/api/lead` | Submit lead |

## 📧 Email Template Preview

When a lead is captured, you receive:

```
Subject: 🔔 New Lead from Website Chatbot - John Doe

Contact Information:
Name: John Doe
Email: john@example.com
Phone: +267 72 123 456

Interest: Individual Therapy

Message/Inquiry:
I'm dealing with anxiety and would like help.

Captured: 17/02/2026, 15:30 (Botswana Time)
```

## 🔐 Security Notes

- ✅ `.env` file is gitignored (credentials safe)
- ✅ Row Level Security enabled on database
- ✅ Anon key only allows INSERT (not read/update/delete)
- ✅ Email credentials encrypted in Render

## ⚠️ Important

**Never commit these to Git:**

- GEMINI_API_KEY
- EMAIL_PASSWORD
- SUPABASE_ANON_KEY (already in .env, which is gitignored)

**Always use environment variables in production!**

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Database error | Check Supabase credentials in .env |
| Email not sending | Verify Gmail App Password |
| API not responding | Check Render deployment logs |
| Can't insert leads | Verify setup.sql was run |

## 📚 Full Documentation

- **Complete Setup**: `database/SUPABASE_SETUP.md`
- **API Documentation**: `README.md`
- **Deployment Guide**: `SETUP_SUMMARY.md`

---

**Status:** ✅ Database schema ready | ⏳ Waiting for SQL execution
**Next:** Run `database/setup.sql` in Supabase SQL Editor
