import { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            // Using relative path to fetch from public folder where php script will be
            const response = await fetch('send_mail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                e.target.reset();
            } else {
                // If we are on localhost, this might fail because there is no PHP server.
                // We'll simulate success for the demo.
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    alert('(Demo Mode) Thank you! Your message has been sent.\n\nNote: In a real environment, this would be processed by the PHP server.');
                    e.target.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            }
        } catch (error) {
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.warn("Fetch failed, but simulating success for localhost demo.");
                alert('(Demo Mode) Thank you! Your message has been sent.\n\nNote: In a real environment, this would be processed by the PHP server.');
                e.target.reset();
            } else {
                console.error('Error:', error);
                alert('There was a network error. Please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="hero page-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '36px' }}>Contact Us</h1>
                    <p className="hero-subtitle">Get in touch to book your session or learn more.</p>
                </div>
            </section>

            <section className="content-section" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Get in Touch</h2>
                            <p style={{ marginBottom: '30px' }}>Fill out the form to request a consultation or ask a question.</p>

                            <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #eee' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--brand-green)' }}>Visit Us</h3>
                                <p>Plot 18680 Khuhurutse St Phase 2<br />Gaborone, Botswana</p>
                            </div>

                            <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #eee' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--brand-green)' }}>Call or WhatsApp</h3>
                                <p>+267 72 534 203</p>
                            </div>

                            <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--brand-green)' }}>Email</h3>
                                <p>info@pameltex.com</p>
                            </div>
                        </div>

                        <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderTop: '4px solid var(--brand-green)' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label htmlFor="name" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name *</label>
                                    <input type="text" id="name" name="name" className="form-input" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label htmlFor="email" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email *</label>
                                    <input type="email" id="email" name="email" className="form-input" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label htmlFor="type" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Type of Consultation *</label>
                                    <select id="type" name="type" className="form-select" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                                        <option value="online">Online</option>
                                        <option value="in_person">In Person</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label htmlFor="message" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message *</label>
                                    <textarea id="message" name="message" className="form-textarea" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', height: '150px', resize: 'vertical' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-solid" style={{ width: '100%' }} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
