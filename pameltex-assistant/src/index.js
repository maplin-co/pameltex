const express = require('express');
const cors = require('cors');
const { processMessage } = require('./services/chatbot');
const { sendLeadNotification, verifyEmailConfig } = require('./services/email');
const supabase = require('./config/supabase');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Store conversation history in memory (in production, use database)
const conversationHistory = new Map();

app.get('/', (req, res) => {
    res.json({
        status: 'running',
        service: 'Luna (Pameltex Assistant) Backend',
        version: '2.0.0',
        endpoints: {
            chat: 'POST /api/chat',
            lead: 'POST /api/lead'
        }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Chat endpoint with conversation history
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get or create conversation history for this session
        const session = sessionId || `session_${Date.now()}`;
        if (!conversationHistory.has(session)) {
            conversationHistory.set(session, []);
        }

        const history = conversationHistory.get(session);
        history.push({ role: 'user', content: message });

        // Process message with rule-based chatbot
        const result = processMessage(message);
        const botResponse = result.response;

        history.push({ role: 'assistant', content: botResponse });

        // Keep only last 10 messages to prevent memory issues
        if (history.length > 10) {
            history.splice(0, history.length - 10);
        }

        // Log to Supabase (optional)
        try {
            await supabase
                .from('chat_logs')
                .insert([
                    {
                        session_id: session,
                        user_message: message,
                        bot_response: botResponse,
                        timestamp: new Date().toISOString()
                    }
                ]);
        } catch (dbError) {
            console.error('Database logging error:', dbError.message);
            // Continue even if logging fails
        }

        res.json({
            response: botResponse,
            sessionId: session,
            category: result.category,
            shouldCollectLead: result.collectLead
        });
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            error: 'Sorry, I encountered an error. Please try again or contact us directly.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Lead collection endpoint
app.post('/api/lead', async (req, res) => {
    try {
        const { name, email, phone, interest, message } = req.body;

        // Validation
        if (!name || !phone) {
            return res.status(400).json({
                error: 'Name and phone number are required'
            });
        }

        const leadData = {
            name,
            email: email || null,
            phone,
            interest: interest || 'General Inquiry',
            message: message || '',
            source: 'Website Chatbot',
            created_at: new Date().toISOString()
        };

        // Save to Supabase
        let leadId = null;
        try {
            const { data, error } = await supabase
                .from('leads')
                .insert([leadData])
                .select();

            if (error) {
                console.error('Supabase error:', error);
            } else if (data && data.length > 0) {
                leadId = data[0].id;
                console.log('✅ Lead saved to database:', leadId);
            }
        } catch (dbError) {
            console.error('Database error:', dbError.message);
            // Continue to send email even if database fails
        }

        // Send email notification
        const emailResult = await sendLeadNotification({
            name,
            email,
            phone,
            interest,
            message
        });

        if (emailResult.success) {
            console.log('✅ Lead notification email sent');
        } else {
            console.error('❌ Email notification failed:', emailResult.error);
        }

        res.json({
            success: true,
            message: 'Thank you! We\'ve received your information and will contact you soon.',
            leadId: leadId
        });

    } catch (error) {
        console.error('Lead collection error:', error);
        res.status(500).json({
            error: 'Failed to process your information. Please try contacting us directly.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Start server
app.listen(port, async () => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 Luna (Pameltex Assistant) Backend`);
    console.log(`${'='.repeat(60)}`);
    console.log(`📍 Server: http://localhost:${port}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`${'='.repeat(60)}\n`);

    // Verify email configuration
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        const emailReady = await verifyEmailConfig();
        if (emailReady) {
            console.log('✅ Email notifications: ENABLED');
        } else {
            console.log('⚠️  Email notifications: DISABLED (check configuration)');
        }
    } else {
        console.log('⚠️  Email notifications: DISABLED (no credentials)');
    }

    console.log('\n📊 Available endpoints:');
    console.log('   GET  /           - Service info');
    console.log('   GET  /health     - Health check');
    console.log('   POST /api/chat   - Chat with Luna');
    console.log('   POST /api/lead   - Submit lead information');
    console.log(`\n${'='.repeat(60)}\n`);
});
