const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Missing Supabase credentials in .env file.');
  console.warn('Running in mock mode for Supabase.');
  // Mock client or simply proceed without initializing fully
}

const supabase = createClient(supabaseUrl || 'https://mock.supabase.co', supabaseKey || 'mock-key');

module.exports = supabase;
