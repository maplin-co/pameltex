-- Create leads table for Pameltex chatbot
-- Copy and paste this entire script into Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    interest TEXT,
    message TEXT,
    source TEXT DEFAULT 'Website Chatbot',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow service role full access
CREATE POLICY "Service role can do everything on leads"
    ON leads FOR ALL TO service_role
    USING (true) WITH CHECK (true);

-- Allow anonymous users to insert (for chatbot)
CREATE POLICY "Allow anonymous inserts on leads"
    ON leads FOR INSERT TO anon
    WITH CHECK (true);

-- Create chat_logs table
CREATE TABLE IF NOT EXISTS chat_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    user_message TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for chat_logs
CREATE INDEX IF NOT EXISTS idx_chat_logs_session_id ON chat_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_logs_timestamp ON chat_logs(timestamp DESC);

-- Enable RLS on chat_logs
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;

-- Allow service role full access to chat_logs
CREATE POLICY "Service role can do everything on chat_logs"
    ON chat_logs FOR ALL TO service_role
    USING (true) WITH CHECK (true);

-- Allow anonymous inserts to chat_logs
CREATE POLICY "Allow anonymous inserts on chat_logs"
    ON chat_logs FOR INSERT TO anon
    WITH CHECK (true);

-- Verify tables were created
SELECT 'Tables created successfully!' as status;
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name IN ('leads', 'chat_logs');
