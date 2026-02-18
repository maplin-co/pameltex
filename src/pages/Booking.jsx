import { useEffect } from 'react';
import SEO from '../components/SEO';

const Booking = () => {

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <SEO
                title="Book a Session | Pameltex Psychosocial & Counselling"
                description="Schedule your therapy session with Pameltex. Book online or contact us directly. Individual therapy, couples counselling, and corporate wellness available."
            />

            <div className="booking-page">
                {/* Hero */}
                <section className="booking-hero">
                    <div className="booking-hero-content">
                        <h1>Book Your Session</h1>
                        <p>Take the first step toward better mental health. Choose a time that works for you.</p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="booking-content">
                    <div className="booking-container">

                        {/* Left — Calendly Embed */}
                        <div className="booking-calendly">
                            <h2>Select a Date & Time</h2>
                            <p className="booking-subtitle">Pick a slot that suits your schedule. We'll confirm your booking by phone or email.</p>
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/pameltex-info"
                                style={{ minWidth: '320px', height: '700px' }}
                            />
                        </div>

                        {/* Right — Contact Info + Form */}
                        <div className="booking-sidebar">
                            <div className="booking-info-card">
                                <h3>Prefer to Contact Us?</h3>
                                <p>Our team is happy to assist you in scheduling your session.</p>

                                <div className="booking-contact-items">
                                    <div className="booking-contact-item">
                                        <span className="booking-icon">📞</span>
                                        <div>
                                            <strong>Call Us</strong>
                                            <a href="tel:+26772534203">+267 72 534 203</a>
                                            <small>Mon – Fri, 8:00 AM – 5:00 PM</small>
                                        </div>
                                    </div>
                                    <div className="booking-contact-item">
                                        <span className="booking-icon">📧</span>
                                        <div>
                                            <strong>Email Us</strong>
                                            <a href="mailto:info@pameltex.com">info@pameltex.com</a>
                                            <small>We respond within 24 hours</small>
                                        </div>
                                    </div>
                                    <div className="booking-contact-item">
                                        <span className="booking-icon">📍</span>
                                        <div>
                                            <strong>Visit Us</strong>
                                            <span>Plot 18680 Khuhurutse St</span>
                                            <small>Phase 2, Gaborone, Botswana</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Available */}
                            <div className="booking-services-card">
                                <h3>Available Sessions</h3>
                                <ul className="booking-services-list">
                                    <li>
                                        <span className="service-icon">🧠</span>
                                        <div>
                                            <strong>Individual Therapy</strong>
                                            <small>50–60 min · In-person or Online</small>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="service-icon">💑</span>
                                        <div>
                                            <strong>Couples Therapy</strong>
                                            <small>60–90 min · In-person or Online</small>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="service-icon">🏢</span>
                                        <div>
                                            <strong>Corporate Wellness</strong>
                                            <small>Custom packages available</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* What to Expect */}
                            <div className="booking-expect-card">
                                <h3>What to Expect</h3>
                                <ol className="booking-steps">
                                    <li><span>1</span> Choose your preferred date and time above</li>
                                    <li><span>2</span> We'll confirm your booking via phone or email</li>
                                    <li><span>3</span> Attend your session in-person or online</li>
                                    <li><span>4</span> Begin your journey to better wellbeing</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Booking;
