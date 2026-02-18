import { useState, useRef, useEffect } from 'react';
import './ChatBot.css'; // We will create this CSS file

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hello! Dumela! I'm Luna, your Pameltex assistant. How can I help you today? / Nka go thusa jang gompieno?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            // Use environment variable or fallback to Render URL
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://pameltex.onrender.com';

            const response = await fetch(`${backendUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Store session ID for conversation continuity
            if (data.sessionId && !sessionId) {
                setSessionId(data.sessionId);
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);

            // Show lead form if bot suggests it
            if (data.shouldCollectLead && !showLeadForm) {
                setTimeout(() => {
                    setShowLeadForm(true);
                }, 2000);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm having trouble connecting right now. Please try calling us at +267 72 534 203 or email info@pameltex.com"
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLeadSubmit = async (e) => {
        e.preventDefault();

        if (!leadData.name || !leadData.phone) {
            alert('Please provide your name and phone number');
            return;
        }

        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://pameltex.onrender.com';

            const response = await fetch(`${backendUrl}/api/lead`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...leadData,
                    interest: 'Website Chat Inquiry',
                    message: 'Lead collected via chatbot'
                }),
            });

            if (response.ok) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `Thank you, ${leadData.name}! We've received your information and will contact you soon at ${leadData.phone}. 📞`
                }]);
                setShowLeadForm(false);
                setLeadData({ name: '', email: '', phone: '' });
            }
        } catch (error) {
            console.error('Error submitting lead:', error);
            alert('There was an error. Please call us at +267 72 534 203');
        }
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {/* Toggle Button (Floating Action Button) */}
            <button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div className="chatbot-window">
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <h3>Luna</h3>
                        <span className="chatbot-status">Online</span>
                    </div>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.role}`}>
                            <div className="message-content">
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message assistant">
                            <div className="message-content typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}

                    {/* Lead Collection Form */}
                    {showLeadForm && (
                        <div className="message assistant">
                            <div className="message-content lead-form">
                                <p style={{ marginBottom: '12px', fontWeight: '500' }}>
                                    📋 May I have your contact information so we can follow up with you?
                                </p>
                                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        value={leadData.name}
                                        onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                        required
                                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number *"
                                        value={leadData.phone}
                                        onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                                        required
                                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email (optional)"
                                        value={leadData.email}
                                        onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                                    />
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                        <button
                                            type="submit"
                                            style={{
                                                flex: 1,
                                                padding: '8px',
                                                background: '#2563eb',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontWeight: '500'
                                            }}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowLeadForm(false)}
                                            style={{
                                                padding: '8px 16px',
                                                background: '#e5e7eb',
                                                color: '#374151',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Skip
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-input-area" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;
