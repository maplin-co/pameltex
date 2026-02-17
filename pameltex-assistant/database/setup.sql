-- ============================================================
-- Pameltex Chatbot Database Schema
-- ============================================================
-- Run this SQL in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard/project/cwxlivyzatiovorlfkyk/sql
-- ============================================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLE: leads
-- Stores contact information collected by the chatbot
-- ============================================================

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

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Add comment to table
COMMENT ON TABLE leads IS 'Contact leads collected from the Pameltex chatbot';

-- ============================================================
-- TABLE: chat_logs
-- Stores conversation history for analytics and debugging
-- ============================================================

CREATE TABLE IF NOT EXISTS chat_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    user_message TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_chat_logs_session_id ON chat_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_logs_timestamp ON chat_logs(timestamp DESC);

-- Add comment to table
COMMENT ON TABLE chat_logs IS 'Chat conversation logs for analytics and debugging';

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- Enable RLS for security (optional but recommended)
-- ============================================================

-- Enable RLS on leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything on leads"
    ON leads
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policy: Allow anon users to insert leads (for chatbot)
CREATE POLICY "Allow anonymous inserts on leads"
    ON leads
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Enable RLS on chat_logs table
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything on chat_logs"
    ON chat_logs
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policy: Allow anon users to insert chat logs (for chatbot)
CREATE POLICY "Allow anonymous inserts on chat_logs"
    ON chat_logs
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- ============================================================
-- FUNCTION: Update updated_at timestamp
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for leads table
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- VERIFICATION QUERIES
-- Run these to verify tables were created successfully
-- ============================================================

-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('leads', 'chat_logs');

-- Check table structures
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'leads'
ORDER BY ordinal_position;

SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'chat_logs'
ORDER BY ordinal_position;

-- ============================================================
-- SAMPLE QUERIES (for testing)
-- ============================================================

-- View all leads
-- SELECT * FROM leads ORDER BY created_at DESC;

-- View recent chat logs
-- SELECT * FROM chat_logs ORDER BY timestamp DESC LIMIT 10;

-- Count leads by source
-- SELECT source, COUNT(*) as count FROM leads GROUP BY source;

-- Count leads by interest
-- SELECT interest, COUNT(*) as count FROM leads GROUP BY interest ORDER BY count DESC;

-- ============================================================
-- SUCCESS!
-- ============================================================
-- Tables created successfully!
-- You can now use the chatbot to collect leads.
-- ============================================================
