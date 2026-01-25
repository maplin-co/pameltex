import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <>
            <section className="hero page-hero" style={{ padding: '60px 0', background: 'var(--brand-purple)' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '36px', color: '#fff' }}>Emergency Resources</h1>
                    <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>Immediate support and contact information for crisis situations.</p>
                </div>
            </section>

            <section className="content-section" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="alert-box" style={{
                        background: '#fff3f3',
                        borderLeft: '4px solid #d32f2f',
                        padding: '20px',
                        borderRadius: '4px',
                        marginBottom: '40px'
                    }}>
                        <h3 style={{ color: '#d32f2f', marginTop: 0 }}>In Immediate Danger?</h3>
                        <p style={{ marginBottom: 0 }}>If you or someone else is in immediate physical danger, please call the police immediately.</p>
                    </div>

                    <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        {/* Botswana Police */}
                        <div className="resource-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderTop: '4px solid var(--brand-teal)' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--brand-purple)' }}>Botswana Police</h2>
                            <p style={{ marginBottom: '20px', color: '#666' }}>For general emergencies, reporting crimes, and immediate assistance.</p>

                            <div className="contact-item" style={{ marginBottom: '15px' }}>
                                <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Emergency Number</span>
                                <a href="tel:999" style={{ fontSize: '32px', fontWeight: '700', color: 'var(--brand-teal)', textDecoration: 'none' }}>999</a>
                            </div>

                            <div className="contact-item">
                                <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Alternative</span>
                                <a href="tel:112" style={{ fontSize: '20px', fontWeight: '600', color: '#444', textDecoration: 'none' }}>112</a>
                                <span style={{ fontSize: '14px', color: '#666', marginLeft: '5px' }}>(Mobile networks)</span>
                            </div>
                        </div>

                        {/* Gender Based Violence */}
                        <div className="resource-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderTop: '4px solid var(--brand-purple)' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--brand-purple)' }}>GBV Support</h2>
                            <p style={{ marginBottom: '20px', color: '#666' }}>Support, counseling, and reporting for Gender Based Violence cases.</p>

                            <div className="contact-item" style={{ marginBottom: '20px' }}>
                                <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Police GBV Toll-Free</span>
                                <a href="tel:0800600144" style={{ fontSize: '28px', fontWeight: '700', color: 'var(--brand-teal)', textDecoration: 'none' }}>0800 600 144</a>
                            </div>

                            <div className="contact-item">
                                <span style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>GBV Tele-Counselling</span>
                                <a href="tel:14655" style={{ fontSize: '28px', fontWeight: '700', color: 'var(--brand-purple)', textDecoration: 'none' }}>14655</a>
                            </div>
                        </div>

                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <p>Need to speak with us?</p>
                        <Link to="/contact" className="btn btn-outline" style={{ marginTop: '10px' }}>Contact Pameltex</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resources;
