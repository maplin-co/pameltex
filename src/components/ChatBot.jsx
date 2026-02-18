import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://pameltex.onrender.com';

const SERVICE_QUICK_REPLIES = ['Book a Session', 'Contact Us', 'Our Team'];
const BOOKING_QUICK_REPLIES = ['Individual Therapy', 'Couples Therapy', 'Corporate Services', 'Contact Us'];
const DEFAULT_QUICK_REPLIES = ['Individual Therapy', 'Consultancy Services', 'Couples Therapy', 'Book a Session'];

function getQuickReplies(category) {
    switch (category) {
        case 'individual':
        case 'couples':
        case 'corporate':
        case 'consultancy':
        case 'child_adolescent':
        case 'online':
        case 'confidentiality':
        case 'languages':
            return SERVICE_QUICK_REPLIES;
        case 'booking':
            return BOOKING_QUICK_REPLIES;
        case 'greeting':
        case 'general':
            return DEFAULT_QUICK_REPLIES;
        default:
            return SERVICE_QUICK_REPLIES;
    }
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [leadCollected, setLeadCollected] = useState(false);
    const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
    const [leadSubmitting, setLeadSubmitting] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, leadCollected]);

    // Submit lead to backend → Supabase
    const handleLeadSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!leadData.name.trim() || !leadData.phone.trim() || !leadData.email.trim()) {
            alert("Please fill in all fields to continue.");
            return;
        }

        setLeadSubmitting(true);
        try {
            await fetch(`${BACKEND_URL}/api/lead`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadData,
                    interest: 'Website Chat',
                    message: 'Lead collected on chat open'
                }),
            });
        } catch (err) {
            console.error('Lead save error:', err);
        } finally {
            setLeadSubmitting(false);
            setLeadCollected(true);
            setMessages([{
                role: 'assistant',
                content: `Thank you, ${leadData.name}! 👋 Welcome to Pameltex.\n\nI'm Luna, your virtual assistant. How can I help you today?`,
                quickReplies: DEFAULT_QUICK_REPLIES
            }]);
        }
    };

    // Send a chat message
    const sendMessage = async (messageText) => {
        if (!messageText.trim() || isLoading) return;

        setMessages(prev => [...prev, { role: 'user', content: messageText }]);
        setIsLoading(true);

        try {
            const response = await fetch(`${BACKEND_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageText, sessionId }),
            });

            if (!response.ok) throw new Error('Network error');
            const data = await response.json();

            if (data.sessionId && !sessionId) setSessionId(data.sessionId);

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.response,
                quickReplies: getQuickReplies(data.category)
            }]);

        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm having trouble connecting right now. Please call us at +267 72 534 203 or email info@pameltex.com",
                quickReplies: null
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = input.trim();
        if (!msg) return;
        setInput('');
        sendMessage(msg);
    };

    const renderContent = (content) =>
        content.split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ));

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {/* Floating Toggle Button */}
            <button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div className="chatbot-window">
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <h3>Luna</h3>
                        <span className="chatbot-status">Online · Pameltex</span>
                    </div>
                    <a href="/booking" className="chatbot-book-btn" target="_blank" rel="noopener noreferrer">
                        📅 Book
                    </a>
                </div>

                {/* Lead Collection Gate — shown before chat */}
                {!leadCollected ? (
                    <div className="chatbot-lead-gate">
                        <div className="lead-gate-intro">
                            <p className="lead-gate-title">👋 Hello! Dumela!</p>
                            <p className="lead-gate-sub">
                                I'm Luna, your Pameltex assistant. Please share your details so we can assist you better.
                            </p>
                        </div>
                        <form onSubmit={handleLeadSubmit} className="lead-gate-form">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                value={leadData.name}
                                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                required
                                className="lead-input"
                                autoComplete="name"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number *"
                                value={leadData.phone}
                                onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                                required
                                className="lead-input"
                                autoComplete="tel"
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                value={leadData.email}
                                onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                required
                                className="lead-input"
                                autoComplete="email"
                            />
                            <button
                                type="submit"
                                className="lead-submit-btn"
                                disabled={leadSubmitting}
                            >
                                {leadSubmitting ? 'Processing...' : 'Start Chat →'}
                            </button>
                        </form>
                        <p className="lead-gate-privacy">🔒 Your information is kept strictly confidential.</p>
                    </div>
                ) : (
                    <>
                        {/* Messages */}
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.role}`}>
                                    <div className="message-content">
                                        {renderContent(msg.content)}
                                    </div>
                                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                                        <div className="quick-replies">
                                            {msg.quickReplies.map((reply, i) => (
                                                <button
                                                    key={i}
                                                    className="quick-reply-btn"
                                                    onClick={() => sendMessage(reply)}
                                                    disabled={isLoading}
                                                >
                                                    {reply}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="message assistant">
                                    <div className="message-content typing-indicator">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form className="chatbot-input-area" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !input.trim()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
