import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WhatIsCounselling = () => {
    return (
        <>
            <SEO
                title="What is Counselling? Your Path to Mental Clarity"
                description="Understand the benefits of professional counselling and psychosocial support. Learn how therapy can help with anxiety, stress, and personal growth."
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "What is Counselling?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Counselling is a collaborative process where you work with a trained professional to explore your thoughts, feelings, and behaviors in a confidential environment."
                            }
                        }, {
                            "@type": "Question",
                            "name": "How does psychosocial support help?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Psychosocial support addresses both psychological and social needs, helping individuals build resilience, cope with trauma, and improve their overall mental well-being."
                            }
                        }]
                    })}
                </script>
            </SEO>

            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">What is Counselling? Your Path to Mental Clarity</h1>
                    <p className="page-subtitle">Discover how professional support empowers you to overcome life’s challenges.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    {/* Section 1: Definition */}
                    <div className="content-block">
                        <h2>Understanding Professional Counselling</h2>
                        <p>
                            <strong>Counselling</strong>, often referred to as talk therapy, is a professional relationship specifically designed to empower individuals, families, and groups to accomplish mental health, wellness, education, and career goals. It involves a collaborative effort between the counselor and the client.
                        </p>
                        <p>
                            At Pameltex, we view counselling as a structured journey of self-discovery and healing. It is not merely about "fixing" problems, but about understanding oneself better and developing the emotional resilience to navigate life's inevitable challenges. By working with a <strong>licensed therapist</strong>, you gain a safe space to explore sensitive issues without judgment.
                        </p>
                    </div>

                    {/* Section 2: Psychosocial Support */}
                    <div className="content-block">
                        <h2>The Role of Psychosocial Support in Mental Health</h2>
                        <p>
                            <strong>Psychosocial support</strong> is a comprehensive approach that addresses both the psychological and social needs of individuals. It goes beyond simple advice-giving to address the root causes of distress, such as trauma, family dynamics, or workplace stress.
                        </p>
                        <p>
                            Effective support relies on three key pillars:
                        </p>
                        <ul className="feature-list">
                            <li><strong>Confidentiality & Privacy:</strong> Your sessions are strictly private, ensuring a secure environment for vulnerability.</li>
                            <li><strong>Non-judgmental Space:</strong> A compassionate atmosphere where you can express feelings freely.</li>
                            <li><strong>Evidence-Based Techniques:</strong> Utilizing proven methods like <a href="https://www.apa.org/topics/psychotherapy/understanding" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-teal)', textDecoration: 'underline' }}>Cognitive Behavioral Therapy (CBT)</a> to foster change.</li>
                        </ul>
                    </div>

                    {/* Section 3: Types of Therapy */}
                    <div className="content-block">
                        <h2>Types of Therapeutic Interventions</h2>
                        <p>
                            There is no "one size fits all" approach to mental wellness. According to the <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-teal)', textDecoration: 'underline' }}>World Health Organization</a>, mental health is a fundamental human right. We offer various styles of intervention:
                        </p>
                        <ul className="feature-list">
                            <li><strong>Individual Therapy:</strong> One-on-one sessions focusing on personal challenges like anxiety or depression.</li>
                            <li><strong>Couples Counselling:</strong> Helping partners improve communication and resolve conflict.</li>
                            <li><strong><Link to="/corporate-services" style={{ color: 'var(--brand-teal)', textDecoration: 'underline' }}>Corporate Wellness</Link>:</strong> Workplace programs designed to boost employee morale and mental health.</li>
                        </ul>
                    </div>

                    {/* Section 4: Benefits */}
                    <div className="content-block">
                        <h2>Common Reasons to Seek Therapy</h2>
                        <p>
                            You do not need to be in crisis to benefit from professional help. Many people seek <strong>counselling services</strong> for personal growth, career guidance, or simply to understand themselves better. Common drivers include:
                        </p>
                        <div className="benefits-grid">
                            <div className="benefit-item">Anxiety & Stress Management</div>
                            <div className="benefit-item">Depression Treatment</div>
                            <div className="benefit-item">Relationship Issues</div>
                            <div className="benefit-item">Grief & Loss Support</div>
                            <div className="benefit-item">Trauma Recovery</div>
                            <div className="benefit-item">Work-Life Balance</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default WhatIsCounselling;
