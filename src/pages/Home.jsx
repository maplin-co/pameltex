import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import clientLetlole from '../assets/client-letlole.png';
import clientLetshego from '../assets/client-letshego.png';
import clientUnitrans from '../assets/client-unitrans.png';

const Home = () => {
    return (
        <>
            <SEO
                title="Psychosocial Support & Counselling Services | Botswana"
                description="Pameltex provides professional counselling, individual therapy, and corporate wellness programs in Gaborone. Prioritize your mental health with certified experts."
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Pameltex Psychosocial & Counseling",
                        "image": "https://www.pameltex.com/assets/logo.png",
                        "@id": "https://www.pameltex.com",
                        "url": "https://www.pameltex.com",
                        "telephone": "+26771234567",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Gaborone",
                            "addressLocality": "Gaborone",
                            "addressCountry": "BW"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -24.6282,
                            "longitude": 25.9231
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "08:00",
                            "closes": "17:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/pameltex"
                        ]
                    })}
                </script>
            </SEO>


            <section className="hero">
                <div className="container hero-container">
                    <h1 className="hero-title">Prioritising your Mental Health.</h1>
                    <p className="hero-subtitle">What type of therapy are you looking for?</p>
                    <div className="therapy-cards">
                        <Link to="/individual-therapy" className="card">
                            <span className="card-label">Individual</span>
                            <span className="card-sub">(For myself)</span>
                            <div className="card-arrow">&rarr;</div>
                        </Link>
                        <Link to="/contact" className="card">
                            <span className="card-label">Couples</span>
                            <span className="card-sub">(For me and my partner)</span>
                            <div className="card-arrow">&rarr;</div>
                        </Link>
                        <Link to="/corporate-services" className="card">
                            <span className="card-label">Corporate</span>
                            <span className="card-sub">(Wellness & Workshops)</span>
                            <div className="card-arrow">&rarr;</div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <strong>International</strong>
                            <span>Accepted Standards</span>
                        </div>
                        <div className="stat-item">
                            <strong>Certified</strong>
                            <span>Professional Counselors</span>
                        </div>
                        <div className="stat-item">
                            <strong>Accessible</strong>
                            <span>Online & In-Person</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro-text-section" style={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '15px' }}>Not sure if therapy is right for you?</p>
                    <Link to="/what-is-counselling" className="btn-link" style={{ color: 'var(--brand-teal)', fontWeight: '600', textDecoration: 'underline' }}>
                        Read our guide on What is Counselling &rarr;
                    </Link>
                </div>
            </section>

            {/* NEW: How It Works Section */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title">How it works</h2>
                    <p className="section-desc">Get matched with a therapist that fits your needs.</p>

                    <div className="process-steps">
                        <div className="step">
                            <div className="step-circle">1</div>
                            <h3>Get Matched</h3>
                            <p>Answer a few questions to find a therapist that fits your specific needs and preferences.</p>
                        </div>
                        <div className="step">
                            <div className="step-circle">2</div>
                            <h3>Communicate</h3>
                            <p>Talk to your therapist however you feel comfortable — text, chat, phone, or video.</p>
                        </div>
                        <div className="step">
                            <div className="step-circle">3</div>
                            <h3>Start Therapy</h3>
                            <p>Begin your journey towards a happier, more fulfilling life with professional support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="value-props">
                <div className="container">
                    <h2 className="section-title">Professional and qualified therapists who you can trust.</h2>
                    <p className="section-desc">Tap into a network of experienced counselors from the comfort of your own home or office.</p>

                    <div className="comparison-table">
                        <div className="comparison-row header">
                            <div></div>
                            <div className="col-brand">Pameltex</div>
                            <div className="col-other">Traditional</div>
                        </div>
                        <div className="comparison-row">
                            <div className="feature">Convenience</div>
                            <div className="col-brand">Online & In-Person</div>
                            <div className="col-other">In-Office Only</div>
                        </div>
                        <div className="comparison-row">
                            <div className="feature">Protocols</div>
                            <div className="col-brand">International</div>
                            <div className="col-other">Varies</div>
                        </div>
                        <div className="comparison-row">
                            <div className="feature">Corporate Support</div>
                            <div className="col-brand">Specialized Programs</div>
                            <div className="col-other">Limited</div>
                        </div>
                        <div className="comparison-row">
                            <div className="feature">Cost</div>
                            <div className="col-brand">Affordable</div>
                            <div className="col-other">Expensive</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Clients Section */}
            <section className="clients-section">
                <div className="container" style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid #eee' }}>
                    <h2 className="section-title" style={{ fontSize: '24px', opacity: 0.6, marginBottom: '40px' }}>Trusted by leading organizations</h2>
                    <div className="clients-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <img src={clientLetlole} alt="Letlole La Rona" className="client-logo" style={{ height: '60px', opacity: 0.8, filter: 'grayscale(100%)', transition: 'all 0.3s' }}
                            onMouseOver={e => e.currentTarget.style.filter = 'none'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                        <img src={clientUnitrans} alt="Unitrans Botswana" className="client-logo" style={{ height: '50px', opacity: 0.8, filter: 'grayscale(100%)', transition: 'all 0.3s' }}
                            onMouseOver={e => e.currentTarget.style.filter = 'none'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                        <img src={clientLetshego} alt="Letshego" className="client-logo" style={{ height: '50px', opacity: 0.8, filter: 'grayscale(100%)', transition: 'all 0.3s' }}
                            onMouseOver={e => e.currentTarget.style.filter = 'none'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                    </div>
                </div>
            </section>

            {/* NEW: Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">Stories from our users</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p className="t-text">"Pameltex has completely changed my view on therapy. I can talk to my counselor from my office during lunch, which is a game changer for my schedule."</p>
                            <span className="t-author">- Sarah K., Gaborone</span>
                        </div>
                        <div className="testimonial-card">
                            <p className="t-text">"I was skeptical about online counseling, but my therapist was so understanding and professional. I feel heard for the first time in years."</p>
                            <span className="t-author">- Michael T.</span>
                        </div>
                        <div className="testimonial-card">
                            <p className="t-text">"The corporate wellness program introduced by Pameltex helped our team communicate better. Highly recommended for businesses."</p>
                            <span className="t-author">- Letlole La Rona, CEO</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
