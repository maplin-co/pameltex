import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [mood, setMood] = useState(null);
    const [userName, setUserName] = useState('Client');
    const [sessionData, setSessionData] = useState(null);
    const [selectedResource, setSelectedResource] = useState(null); // For the modal viewer

    // Simulate loading and auth check
    useEffect(() => {
        const isAuth = localStorage.getItem('pameltex_auth');
        if (!isAuth) {
            navigate('/login');
            return;
        }

        const storedName = localStorage.getItem('pameltex_user_name');
        if (storedName) setUserName(storedName);

        // Load appointment data if any
        const appointment = localStorage.getItem('pameltex_appointment');
        if (appointment) {
            try {
                const parsedData = JSON.parse(appointment);
                setSessionData(parsedData);
            } catch (e) {
                console.error("Error parsing appointment data", e);
            }
        }
    }, [navigate]);

    const handleMoodSelect = (index) => {
        setMood(index);
        const newMoodEntry = {
            moodScore: index,
            timestamp: new Date().toISOString()
        };
        const currentMoods = JSON.parse(localStorage.getItem('pameltex_moods') || '[]');
        const updatedMoods = [newMoodEntry, ...currentMoods];
        localStorage.setItem('pameltex_moods', JSON.stringify(updatedMoods));
    };

    const handleLogout = () => {
        navigate('/login');
    };

    // --- Content Components ---

    const ArticleViewer = ({ title, content }) => (
        <div className="resource-viewer">
            <h2>{title}</h2>
            <div className="article-content" style={{ lineHeight: '1.8', color: '#444' }}>
                {content}
            </div>
        </div>
    );

    const BreathingTool = () => {
        const [phase, setPhase] = useState('Inhale');
        useEffect(() => {
            const interval = setInterval(() => {
                setPhase(p => p === 'Inhale' ? 'Hold' : p === 'Hold' ? 'Exhale' : 'Inhale');
            }, 4000); // Simple 4-4-4 box breathing roughly
            return () => clearInterval(interval);
        }, []);

        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>Visual Breathing Aid</h2>
                <p>Follow the circle. Breathe in deeply, hold, and release slowly.</p>
                <div style={{
                    width: '200px',
                    height: '200px',
                    background: 'var(--brand-teal)',
                    borderRadius: '50%',
                    margin: '60px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    transition: 'all 4s ease-in-out',
                    transform: phase === 'Inhale' ? 'scale(1.2)' : phase === 'Exhale' ? 'scale(0.8)' : 'scale(1)',
                    opacity: phase === 'Hold' ? 0.8 : 1
                }}>
                    {phase}
                </div>
            </div>
        );
    };

    const JournalTool = () => {
        const [entry, setEntry] = useState('');
        const [saved, setSaved] = useState(false);

        const saveEntry = () => {
            if (!entry.trim()) return;
            const entries = JSON.parse(localStorage.getItem('pameltex_journal') || '[]');
            entries.unshift({ date: new Date().toISOString(), text: entry });
            localStorage.setItem('pameltex_journal', JSON.stringify(entries));
            setSaved(true);
            setEntry('');
            setTimeout(() => setSaved(false), 3000);
        };

        return (
            <div>
                <h2>Daily Journal</h2>
                <p>Write your thoughts freely. All data is stored locally on your device.</p>
                <textarea
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    placeholder="How are you feeling today?"
                    style={{ width: '100%', height: '300px', padding: '20px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '16px', fontFamily: 'inherit', resize: 'none', marginTop: '20px' }}
                />
                <button className="btn btn-solid" style={{ marginTop: '20px', background: 'var(--brand-teal)' }} onClick={saveEntry}>Save Entry</button>
                {saved && <span style={{ marginLeft: '20px', color: 'var(--brand-green)' }}>Saved successfully!</span>}
            </div>
        );
    };

    // Data for resources
    const resourcesData = [
        {
            id: 1,
            title: "Understanding Anxiety",
            type: "Article",
            category: "Mental Health",
            duration: "5 min read",
            color: "#e8f5e9",
            content: (
                <>
                    <p>Anxiety is a normal emotion. It’s your brain’s way of reacting to stress and warning you of potential danger ahead.</p>
                    <h3>The 3-3-3 Rule</h3>
                    <p>When you feel overwhelmed, look around you and name:</p>
                    <ul>
                        <li>3 things you see</li>
                        <li>3 sounds you hear</li>
                        <li>3 parts of your body you can move</li>
                    </ul>
                    <p>This simple trick helps center your mind and bring you back to the present moment, anchoring you in reality rather than worrying thoughts.</p>
                    <h3>When to seek help</h3>
                    <p>If your anxiety interferes with your daily activities, such as work, school, or sleep, it may be time to speak with one of our professionals.</p>
                </>
            )
        },
        {
            id: 2,
            title: "Visual Meditation",
            type: "Interactive",
            category: "Wellness",
            duration: "Continuous",
            color: "#e3f2fd",
            component: <BreathingTool />
        },
        {
            id: 3,
            title: "Coping with Stress at Work",
            type: "Article",
            category: "Work-Life",
            duration: "7 min read",
            color: "#fff3e0",
            content: (
                <>
                    <h3>1. Identify Your Triggers</h3>
                    <p>Keep a journal for a week to identify which situations create the most physical and mental stress.</p>
                    <h3>2. Establish Boundaries</h3>
                    <p>In today's digital world, it's easy to feel pressure to be available 24 hours a day. Establish some work-life boundaries for yourself. That might mean not checking email from home in the evening, or not answering the phone during dinner.</p>
                    <h3>3. Take Time to Recharge</h3>
                    <p>To avoid the negative effects of chronic stress and burnout, we need time to replenish and return to our pre-stress level of functioning.</p>
                </>
            )
        },
        {
            id: 4,
            title: "Daily Journaling Tool",
            type: "Tool",
            category: "Self-Care",
            duration: "Interactive",
            color: "#f3e5f5",
            component: <JournalTool />
        }
    ];

    return (
        <div className="dashboard-layout">
            <aside className="dash-sidebar">
                <div className="dash-logo">
                    <h2>Pameltex</h2>
                </div>

                <nav className="dash-nav">
                    <button className={`dash-nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        <span>📊</span> Overview
                    </button>
                    <button className={`dash-nav-item ${activeTab === 'assessment' ? 'active' : ''}`} onClick={() => setActiveTab('assessment')}>
                        <span>📝</span> Assignments
                    </button>
                    <button className={`dash-nav-item ${activeTab === 'resources' ? 'active' : ''}`} onClick={() => setActiveTab('resources')}>
                        <span>📚</span> Help Materials
                    </button>
                    <button className={`dash-nav-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
                        <span>💬</span> Messages
                    </button>
                </nav>

                <div className="dash-footer">
                    <button onClick={handleLogout} className="dash-logout"><span>🚪</span> Log Out</button>
                </div>
            </aside>

            <main className="dash-content" style={{ position: 'relative' }}>
                <header className="dash-header">
                    <div className="dash-welcome">
                        <h1>{activeTab === 'overview' ? `Welcome back, ${userName}` :
                            activeTab === 'assessment' ? 'Assignments' :
                                activeTab === 'resources' ? 'Resource Library' : 'Messages'}
                        </h1>
                        <p>{activeTab === 'overview' ? "Here's what's happening with your wellness journey today." : ''}</p>
                    </div>
                    <div className="dash-user-profile">
                        <div className="avatar">{userName.charAt(0)}</div>
                    </div>
                </header>

                {/* Main Tab Content */}
                {activeTab === 'overview' && (
                    <div className="dash-container animate-fade-in">
                        <section className="dash-section">
                            <div className="section-header"><h2>Daily Check-in</h2></div>
                            <div className="mood-card">
                                <h3>How are you feeling right now?</h3>
                                <div className="mood-options">
                                    {['😔', '😐', '🙂', '😊', '🤩'].map((emoji, index) => (
                                        <button key={index} className={`mood-btn ${mood === index ? 'selected' : ''}`} onClick={() => handleMoodSelect(index)}>{emoji}</button>
                                    ))}
                                </div>
                                {mood !== null && <div className="mood-response animate-fade-in"><p>Response saved.</p></div>}
                            </div>
                        </section>
                        <section className="dash-section">
                            <div className="section-header">
                                <h2>Recommended Resources</h2>
                                <button className="view-all-btn" onClick={() => setActiveTab('resources')}>View All</button>
                            </div>
                            <div className="resources-grid">
                                {resourcesData.map(resource => (
                                    <div key={resource.id} className="resource-card" style={{ borderTopColor: resource.color }}>
                                        <div className="resource-icon" style={{ background: resource.color }}>
                                            {resource.type === 'Article' ? '📄' : resource.type === 'Tool' ? '✍️' : '🧠'}
                                        </div>
                                        <div className="resource-content">
                                            <span className="resource-tag">{resource.category}</span>
                                            <h3>{resource.title}</h3>
                                            <p>{resource.duration}</p>
                                        </div>
                                        <button className="resource-action" onClick={() => setSelectedResource(resource)}>Open</button>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="dash-section">
                            <div className="session-card">
                                {sessionData ? (
                                    <>
                                        <div className="session-info">
                                            <h3>Next Session</h3>
                                            <p className="session-time">{sessionData.time}</p>
                                            <p className="session-doc">with {sessionData.doctor}</p>
                                        </div>
                                        <div className="session-action">
                                            <button className="btn btn-solid">Join</button>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ width: '100%', textAlign: 'center' }}>
                                        <h3 style={{ marginBottom: '10px' }}>No upcoming sessions</h3>
                                        <Link to="/contact" className="btn btn-solid" style={{ background: '#fff', color: 'var(--brand-teal)', border: 'none' }}>Book Session</Link>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'resources' && (
                    <div className="dash-container animate-fade-in">
                        <div className="resources-grid">
                            {resourcesData.map(resource => (
                                <div key={resource.id} className="resource-card" style={{ borderTopColor: resource.color }}>
                                    <div className="resource-icon" style={{ background: resource.color }}>
                                        {resource.type === 'Article' ? '📄' : resource.type === 'Tool' ? '✍️' : '🧠'}
                                    </div>
                                    <div className="resource-content">
                                        <span className="resource-tag">{resource.category}</span>
                                        <h3>{resource.title}</h3>
                                        <p>{resource.duration}</p>
                                    </div>
                                    <button className="resource-action" onClick={() => setSelectedResource(resource)}>Open</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'assessment' && (
                    <div className="dash-container animate-fade-in">
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                            <h3>No pending assignments</h3>
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="dash-container animate-fade-in">
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '12px' }}>
                            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                                <h2 style={{ color: 'var(--brand-purple)', marginBottom: '10px' }}>Secure Messaging</h2>
                                <p style={{ color: '#666' }}>Communicate directly with your assigned counselor. All messages are encrypted and confidential.</p>
                            </div>

                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>To:</label>
                                    <input
                                        type="text"
                                        value="assessments@pameltex.com"
                                        readOnly
                                        style={{ width: '100%', padding: '12px', background: '#f5f5f5', border: '1px solid #ddd', borderRadius: '6px', color: '#666' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Subject:</label>
                                    <input
                                        type="text"
                                        id="msg-subject"
                                        placeholder="e.g., Question about my session..."
                                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Message:</label>
                                    <textarea
                                        id="msg-body"
                                        placeholder="Type your message here..."
                                        style={{ width: '100%', minHeight: '150px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', resize: 'vertical', fontFamily: 'inherit' }}
                                    ></textarea>
                                </div>

                                <button
                                    onClick={() => {
                                        const subject = document.getElementById('msg-subject').value;
                                        const body = document.getElementById('msg-body').value;

                                        if (!subject || !body) {
                                            alert("Please fill in both the subject and message fields.");
                                            return;
                                        }

                                        window.open(`mailto:assessments@pameltex.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                                    }}
                                    className="btn btn-solid"
                                    style={{ width: '100%', padding: '15px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                                >
                                    <span>📩</span> Send Message
                                </button>
                                <p style={{ marginTop: '15px', fontSize: '13px', color: '#999', textAlign: 'center' }}>
                                    * This will open your default email client to send the secure message.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Resource Viewer Modal/Overlay */}
                {selectedResource && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }} onClick={() => setSelectedResource(null)}>
                        <div style={{
                            background: '#fff',
                            width: '100%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            borderRadius: '16px',
                            padding: '40px',
                            position: 'relative'
                        }} onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedResource(null)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer'
                                }}
                            >
                                ✕
                            </button>

                            <span className="resource-tag" style={{ background: selectedResource.color, marginBottom: '20px', display: 'inline-block' }}>{selectedResource.category}</span>

                            {selectedResource.component ? (
                                selectedResource.component
                            ) : (
                                <ArticleViewer title={selectedResource.title} content={selectedResource.content} />
                            )}
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default Dashboard;
