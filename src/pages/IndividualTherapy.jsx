import { Link } from 'react-router-dom';

const IndividualTherapy = () => {
    return (
        <>
            <section class="hero page-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
                <div class="container">
                    <h1 class="hero-title" style={{ fontSize: '36px' }}>Individual Therapy</h1>
                    <p class="hero-subtitle">Personalized care for anxiety, stress, depression, and personal growth.</p>
                </div>
            </section>

            <section class="content-section" style={{ padding: '80px 0' }}>
                <div class="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 class="section-title">Is Therapy Right for You?</h2>
                        <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.8' }}>
                            Individual therapy focuses on "Common Disorders" such as anxiety, stress, and depression. Many
                            people wonder if their feelings are "normal" or if they need professional help.
                        </p>

                        <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '40px' }}>
                            <h3 style={{ color: 'var(--accent-orange)', marginBottom: '15px' }}>Understanding Anxiety</h3>
                            <p>Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel
                                restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress. For
                                example, you might feel anxious when faced with a difficult problem at work, before taking a
                                test, or before making an important decision.</p>
                            <br />
                            <p><strong>However, if these feelings persist and affect your daily life, it may be time to
                                speak with a professional.</strong></p>
                        </div>

                        <h3 style={{ color: 'var(--accent-purple)', marginBottom: '20px' }}>Our Therapeutic Approaches</h3>
                        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <li style={{ background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <strong style={{ color: 'var(--brand-green)' }}>Behavior Therapy</strong>
                                <p style={{ fontSize: '14px', marginTop: '5px' }}>Focuses on the role of learning in developing
                                    both normal and abnormal behaviors.</p>
                            </li>
                            <li style={{ background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <strong style={{ color: 'var(--brand-green)' }}>Cognitive Therapy</strong>
                                <p style={{ fontSize: '14px', marginTop: '5px' }}>Focuses on what people think rather than what
                                    they do.</p>
                            </li>
                            <li style={{ background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <strong style={{ color: 'var(--brand-green)' }}>Humanistic Therapy</strong>
                                <p style={{ fontSize: '14px', marginTop: '5px' }}>Emphasizes people's capacity to make rational
                                    choices and develop to their maximum potential.</p>
                            </li>
                            <li style={{ background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                                <strong style={{ color: 'var(--brand-green)' }}>Psychoanalysis</strong>
                                <p style={{ fontSize: '14px', marginTop: '5px' }}>Explores unconscious meanings and motivations.
                                </p>
                            </li>
                        </ul>

                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <Link to="/contact" class="btn btn-solid"
                                style={{ padding: '15px 40px', fontSize: '18px' }}>Schedule a Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndividualTherapy;
