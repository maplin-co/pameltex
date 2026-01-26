import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [mood, setMood] = useState(null);
    const [userName, setUserName] = useState('Client');
    const [sessionData, setSessionData] = useState(null);
    const [selectedResource, setSelectedResource] = useState(null); // For the modal viewer
    const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

    // Check if assessment was already done today
    useEffect(() => {
        const lastAssessment = localStorage.getItem('pameltex_assessment_date');
        const today = new Date().toDateString();
        if (lastAssessment === today) {
            setAssessmentSubmitted(true);
        }
    }, []);

    const SelfAssessmentForm = () => {
        const [scores, setScores] = useState({ q1: 5, q2: 5, q3: 5, q4: 5, q5: 5 });

        const handleSubmit = () => {
            // Save to local storage (simulating backend save)
            localStorage.setItem('pameltex_assessment_date', new Date().toDateString());
            localStorage.setItem('pameltex_last_scores', JSON.stringify(scores));
            setAssessmentSubmitted(true);
            window.scrollTo(0, 0);
        };

        const questions = [
            { id: 'q1', text: "How would you rate your overall stress level today?" },
            { id: 'q2', text: "How intense has your anxiety been in the last 24 hours?" },
            { id: 'q3', text: "To what extent have you felt down, depressed, or hopeless?" },
            { id: 'q4', text: "How poor was your sleep quality last night?" },
            { id: 'q5', text: "How difficult was it to handle your daily tasks today?" }
        ];

        return (
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: 'var(--brand-purple)', marginBottom: '10px' }}>Daily Mental Wellness Check</h2>
                    <p style={{ color: '#666' }}>Rate each area from 1 to 10.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                        <span style={{ color: 'var(--brand-green)' }}>1 = Good / Low Intensity</span>
                        <span style={{ color: 'red' }}>10 = Extremely Bad / High Intensity</span>
                    </div>
                </div>

                {questions.map((q, idx) => (
                    <div key={q.id} style={{ marginBottom: '30px', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>{idx + 1}. {q.text}</label>
                            <span style={{ fontWeight: 'bold', color: 'var(--brand-teal)' }}>Score: {scores[q.id]}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '12px', color: '#666' }}>1 (Good)</span>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={scores[q.id]}
                                onChange={(e) => setScores({ ...scores, [q.id]: parseInt(e.target.value) })}
                                style={{ flex: 1, accentColor: 'var(--brand-teal)', cursor: 'pointer' }}
                            />
                            <span style={{ fontSize: '12px', color: '#666' }}>10 (Bad)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', fontSize: '11px', color: '#999' }}>
                            {[...Array(10)].map((_, i) => <span key={i}>{i + 1}</span>)}
                        </div>
                    </div>
                ))}

                <button
                    onClick={handleSubmit}
                    className="btn btn-solid"
                    style={{ width: '100%', padding: '15px', border: 'none', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}
                >
                    Submit Assessment
                </button>
            </div>
        );
    };

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
                                {sessionData && !sessionData.cancelled ? (
                                    <>
                                        <div className="session-info">
                                            <h3>Next Session</h3>
                                            <p className="session-time">{sessionData.time}</p>
                                            <p className="session-doc">with {sessionData.doctor}</p>
                                            <p style={{ fontSize: '12px', marginTop: '5px', color: 'var(--brand-green)' }}>
                                                🔔 Reminder set for 24h prior
                                            </p>
                                        </div>
                                        <div className="session-action" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <button className="btn btn-solid">Join Session</button>

                                            <button
                                                onClick={async () => {
                                                    if (confirm("Send a test reminder email now?")) {
                                                        const formData = new FormData();
                                                        formData.append('type', 'Reminder Test');
                                                        formData.append('name', userName);
                                                        formData.append('email', 'client@example.com');
                                                        formData.append('message', `Reminder: You have a session on ${sessionData.time}`);
                                                        try {
                                                            await fetch('send_mail.php', { method: 'POST', body: formData });
                                                            alert('Reminder Sent!');
                                                        } catch (e) { alert('Reminder Sent (Simulated)!'); }
                                                    }
                                                }}
                                                style={{ fontSize: '12px', background: 'transparent', border: '1px solid #ccc', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}
                                            >
                                                📩 Send Test Reminder
                                            </button>

                                            <button
                                                onClick={() => {
                                                    if (confirm("Cancel this booking?")) {
                                                        const updated = { ...sessionData, cancelled: true };
                                                        setSessionData(updated);
                                                        localStorage.setItem('pameltex_appointment', JSON.stringify(updated));
                                                    }
                                                }}
                                                style={{ fontSize: '12px', color: 'red', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}
                                            >
                                                Cancel Booking
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ width: '100%', textAlign: 'center' }}>
                                        {sessionData && sessionData.cancelled ? (
                                            <div style={{ marginBottom: '15px' }}>
                                                <h3 style={{ color: 'red', marginBottom: '5px' }}>🚫 Session Cancelled</h3>
                                                <p style={{ color: '#666', fontSize: '14px' }}>This session has been removed from your active schedule.</p>
                                            </div>
                                        ) : (
                                            <h3 style={{ marginBottom: '10px' }}>No upcoming sessions</h3>
                                        )}
                                        <button
                                            onClick={() => {
                                                Calendly.initPopupWidget({ url: 'https://calendly.com/pameltex-info/30min' });
                                                return false;
                                            }}
                                            className="btn btn-solid"
                                            style={{ background: '#fff', color: 'var(--brand-teal)', border: 'none', cursor: 'pointer' }}
                                        >
                                            Book New Session
                                        </button>
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
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '12px' }}>
                            {assessmentSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                                    <h2 style={{ color: 'var(--brand-purple)', marginBottom: '15px' }}>Assessment Complete</h2>
                                    <p style={{ fontSize: '18px', color: '#444', marginBottom: '30px' }}>
                                        Thank you for checking in today. Your results have been logged and will be reviewed by your counselor before your next session.
                                    </p>
                                    <button
                                        onClick={() => setActiveTab('resources')}
                                        className="btn btn-solid"
                                        style={{ padding: '12px 30px', border: 'none', cursor: 'pointer' }}
                                    >
                                        View Recommended Resources
                                    </button>
                                </div>
                            ) : (
                                <SelfAssessmentForm />
                            )}
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
