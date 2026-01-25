import { Link } from 'react-router-dom';

const CorporateServices = () => {
    return (
        <>
            <section className="business-hero">
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '42px', maxWidth: '800px', margin: '0 auto 20px' }}>
                        Mental health benefits for your workforce
                    </h1>
                    <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Support your employees with the most convenient and affordable professional therapy service in Botswana.
                    </p>
                    <Link to="/contact" className="btn btn-solid" style={{ backgroundColor: '#fff', color: 'var(--brand-green)', borderColor: '#fff' }}>
                        Request a Demo
                    </Link>
                </div>
            </section>

            <section className="business-features">
                <div className="container">
                    <h2 className="section-title">Why Pameltex for Business?</h2>
                    <p className="section-desc">Comprehensive support designed for modern organizations.</p>

                    <div className="b-grid">
                        <div className="b-card">
                            <div className="b-icon">🏢</div>
                            <h3 className="b-title">Organization-Wide Wellness</h3>
                            <p className="b-text">Implement a turnkey solution that addresses stress, burnout, and productivity across your entire team.</p>
                        </div>
                        <div className="b-card">
                            <div className="b-icon">🔒</div>
                            <h3 className="b-title">100% Confidential</h3>
                            <p className="b-text">We adhere to strict international protocols. Employee utilization is anonymized to ensure trust and privacy.</p>
                        </div>
                        <div className="b-card">
                            <div className="b-icon">📊</div>
                            <h3 className="b-title">Utilization Reporting</h3>
                            <p className="b-text">Receive aggregate insights into the mental health trends of your workforce to make informed HR decisions.</p>
                        </div>
                        <div className="b-card">
                            <div className="b-icon">💰</div>
                            <h3 className="b-title">Cost-Effective</h3>
                            <p className="b-text">Pay only for what you use, or choose a flat-rate subscription model that fits your budget.</p>
                        </div>
                        <div className="b-card">
                            <div className="b-icon">🎓</div>
                            <h3 className="b-title">Training & Workshops</h3>
                            <p className="b-text">Beyond 1-on-1 therapy, we offer group workshops on conflict resolution, leadership, and emotional intelligence.</p>
                        </div>
                        <div className="b-card">
                            <div className="b-icon">🌍</div>
                            <h3 className="b-title">Remote & In-Person</h3>
                            <p className="b-text">Whether your team is in Gaborone or remote, we meet them where they are with flexible session formats.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to support your team?</h2>
                    <p style={{ marginBottom: '30px', fontSize: '18px' }}>Get in touch to discuss a tailored package for your organization.</p>
                    <button
                        onClick={() => {
                            const isAuth = localStorage.getItem('pameltex_auth');
                            if (!isAuth) {
                                alert("Please sign in to book a consultation.");
                                window.location.href = '/login';
                                return;
                            }

                            const confirmBooking = confirm("Proceed to schedule a corporate consultation?\n\n(This will simulate a confirmed booking)");

                            if (confirmBooking) {
                                window.open('https://calendar.google.com/calendar/r/eventedit?add=pameltex@gmail.com', '_blank');

                                const mockAppointment = {
                                    doctor: "Pameltex Team",
                                    time: "Pending Scheduling",
                                    type: "Corporate Consultation"
                                };
                                localStorage.setItem('pameltex_appointment', JSON.stringify(mockAppointment));

                                window.location.href = '/dashboard';
                            }
                        }}
                        className="btn btn-solid" style={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--bg-dark)', color: '#fff', padding: '15px 30px', border: 'none', cursor: 'pointer' }}>
                        Contact Us Today
                    </button>
                </div>
            </section>
        </>
    );
};

export default CorporateServices;
