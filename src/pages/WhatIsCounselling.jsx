import Link from 'react-router-dom';
import SEO from '../components/SEO';

const WhatIsCounselling = () => {
    return (
        <>
            <SEO
                title="What is Counselling? | Professional Therapy in Botswana"
                description="Understand what counselling is, how it works, and its benefits. Pameltex offers professional psychosocial support and therapy in Botswana."
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
                                "text": "Counselling is a collaborative process where you work with a trained professional to explore your thoughts, feelings, and behaviors. It provides a safe, confidential space to discuss challenges and find improved ways of coping."
                            }
                        }, {
                            "@type": "Question",
                            "name": "How does counselling help?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Counselling helps by providing a supportive environment to process emotions, learn new coping strategies, improve relationships, and gain personal insights that lead to positive life changes."
                            }
                        }]
                    })}
                </script>
            </SEO>

            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">What is Counselling?</h1>
                    <p className="page-subtitle">Understanding the process of professional support.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-block">
                        <h2>Defining Counselling</h2>
                        <p>
                            Counselling is a professional relationship specifically designed to empower individuals, families, and groups to accomplish mental health, wellness, education, and career goals. It involves a collaborative effort between the counselor and the client.
                        </p>
                        <p>
                            At Pameltex, we view counselling as a journey of self-discovery and healing. It is not just about "fixing" problems, but about understanding oneself better and developing the resilience to navigate life's challenges.
                        </p>
                    </div>

                    <div className="content-block">
                        <h2>How Psychosocial Support Works</h2>
                        <p>
                            Psychosocial support refers to the actions that address both the psychological and social needs of individuals, families, and communities. It goes beyond simple advice-giving to address the root causes of distress.
                        </p>
                        <ul className="feature-list">
                            <li><strong>Confidentiality:</strong> Your sessions are private and secure.</li>
                            <li><strong>Non-judgmental Space:</strong> A safe environment to express yourself freely.</li>
                            <li><strong>Professional Guidance:</strong> Evidence-based techniques tailored to your needs.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h2>Who Can Benefit?</h2>
                        <p>
                            Counselling is beneficial for anyone experiencing varying degrees of distress or simply seeking personal growth. You don't need to be in crisis to see a counsellor. Common reasons include:
                        </p>
                        <div className="benefits-grid">
                            <div className="benefit-item">Anxiety & Stress</div>
                            <div className="benefit-item">Depression</div>
                            <div className="benefit-item">Relationship Issues</div>
                            <div className="benefit-item">Grief & Loss</div>
                            <div className="benefit-item">Career Guidance</div>
                            <div className="benefit-item">Trauma</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatIsCounselling;
