# 🗄️ Supabase Database Setup Guide

## Connection Details

**Project Reference:** `cwxlivyzatiovorlfkyk`
**Region:** EU West 1 (Ireland)
**Connection String:** `postgresql://postgres.cwxlivyzatiovorlfkyk:[YOUR-PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:6543/postgres`

## 📋 Step-by-Step Setup

### Step 1: Access Supabase Dashboard

1. Go to: <https://supabase.com/dashboard/project/cwxlivyzatiovorlfkyk>
2. Log in to your Supabase account
3. You should see your project dashboard

### Step 2: Run the SQL Migration

1. **Click on "SQL Editor"** in the left sidebar
2. **Click "New Query"**
3. **Copy the entire contents** of `database/setup.sql`
4. **Paste into the SQL editor**
5. **Click "Run"** (or press Ctrl+Enter)
6. **Wait for success message** ✅

The script will create:

- ✅ `leads` table (for storing contact information)
- ✅ `chat_logs` table (for conversation history)
- ✅ Indexes for faster queries
- ✅ Row Level Security policies
- ✅ Auto-update timestamp triggers

### Step 3: Verify Tables Were Created

Run this query in the SQL Editor:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('leads', 'chat_logs');
```

You should see:

```
table_name
----------
leads
chat_logs
```

### Step 4: Get Your Supabase Credentials

1. **Go to Project Settings** (gear icon in sidebar)
2. **Click "API"** section
3. **Copy these values:**

   - **Project URL**: `https://cwxlivyzatiovorlfkyk.supabase.co`
   - **Anon/Public Key**: (long string starting with `eyJ...`)

### Step 5: Update Environment Variables

#### For Local Development

Edit `pameltex-assistant/.env`:

```env
SUPABASE_URL=https://cwxlivyzatiovorlfkyk.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
GEMINI_API_KEY=your-gemini-key-here
PORT=3000

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@pameltex.com
```

#### For Render Deployment

Add these in Render Dashboard → Environment Variables:

```
SUPABASE_URL=https://cwxlivyzatiovorlfkyk.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
GEMINI_API_KEY=your-gemini-key-here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=info@pameltex.com
```

## 🧪 Testing the Database

### Test 1: Insert a Sample Lead

Run this in Supabase SQL Editor:

```sql
INSERT INTO leads (name, email, phone, interest, message)
VALUES (
    'Test User',
    'test@example.com',
    '+267 72 123 456',
    'Individual Therapy',
    'This is a test lead from SQL'
);

-- View the inserted lead
SELECT * FROM leads ORDER BY created_at DESC LIMIT 1;
```

### Test 2: View All Leads

```sql
SELECT 
    name,
    phone,
    email,
    interest,
    created_at
FROM leads 
ORDER BY created_at DESC;
```

### Test 3: Check Chat Logs

```sql
SELECT 
    session_id,
    user_message,
    LEFT(bot_response, 50) as response_preview,
    timestamp
FROM chat_logs 
ORDER BY timestamp DESC 
LIMIT 10;
```

## 📊 Useful Queries

### Count Leads by Source

```sql
SELECT source, COUNT(*) as count 
FROM leads 
GROUP BY source 
ORDER BY count DESC;
```

### Count Leads by Interest

```sql
SELECT interest, COUNT(*) as count 
FROM leads 
WHERE interest IS NOT NULL
GROUP BY interest 
ORDER BY count DESC;
```

### Recent Leads (Last 7 Days)

```sql
SELECT 
    name,
    phone,
    email,
    interest,
    created_at
FROM leads 
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Leads Without Email

```sql
SELECT name, phone, interest, created_at
FROM leads 
WHERE email IS NULL
ORDER BY created_at DESC;
```

## 🔒 Security Notes

**Row Level Security (RLS) is enabled** on both tables:

- ✅ **Anonymous users** (chatbot) can INSERT leads and chat logs
- ✅ **Service role** (backend) has full access
- ✅ **No one** can read/update/delete without proper authentication

This ensures:

- Chatbot can collect leads ✅
- Data is protected from unauthorized access ✅
- You can view data in Supabase dashboard ✅

## 🚨 Troubleshooting

### "Permission denied for table leads"

**Solution:** Make sure RLS policies are created. Re-run the setup.sql script.

### "Relation 'leads' does not exist"

**Solution:** The table wasn't created. Run the setup.sql script in SQL Editor.

### Backend can't insert leads

**Solution:**

1. Check SUPABASE_URL and SUPABASE_ANON_KEY are set correctly
2. Verify the anon key has INSERT permissions (RLS policies)
3. Check backend logs for specific error messages

### Can't see data in Supabase dashboard

**Solution:**

1. Go to Table Editor in Supabase dashboard
2. Select "leads" or "chat_logs" table
3. Data should appear there

## 📈 Monitoring Leads

### Option 1: Supabase Dashboard

1. Go to **Table Editor**
2. Select **leads** table
3. View all leads with filters and sorting

### Option 2: SQL Queries

Use the queries above in the SQL Editor

### Option 3: Email Notifications

You'll receive an email every time a new lead is captured!

## ✅ Checklist

- [ ] Accessed Supabase dashboard
- [ ] Ran setup.sql in SQL Editor
- [ ] Verified tables exist
- [ ] Copied Project URL and Anon Key
- [ ] Updated .env file (local)
- [ ] Updated Render environment variables
- [ ] Tested with sample insert
- [ ] Verified RLS policies work

## 🎯 Next Steps

Once database is set up:

1. ✅ Update environment variables in Render
2. ✅ Redeploy backend on Render
3. ✅ Test chatbot lead collection
4. ✅ Verify email notifications work
5. ✅ Check leads appear in Supabase

---

**Need Help?** Check the main README.md or contact support.
