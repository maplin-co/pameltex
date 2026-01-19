import { Link } from 'react-router-dom';
import bosswaLogo from '../assets/bosswa-logo.jpg';
import letloleLogo from '../assets/client-letlole.png';
import letshegoLogo from '../assets/client-letshego.png';
import unitransLogo from '../assets/client-unitrans.png';
import thitmaLogo from '../assets/thitma-logo.jpg';

const ConsultancyServices = () => {
    const services = [
        {
            title: "Business Advisory",
            icon: "💼",
            description: "Expert guidance to help your business navigate challenges and seize opportunities."
        },
        {
            title: "Business Plans",
            icon: "📝",
            description: " comprehensive business plans tailored to your specific goals and market conditions."
        },
        {
            title: "Strategy",
            icon: "🎯",
            description: "Strategic planning to define your vision, mission, and long-term objectives."
        },
        {
            title: "Corporate Governance",
            icon: "🏛️",
            description: "Establishing frameworks for accountability, fairness, and transparency in your organization."
        },
        {
            title: "Employment Assistance Program",
            icon: "🤝",
            description: "Support programs to enhance employee well-being and productivity."
        },
        {
            title: "Accreditation",
            icon: "📜",
            description: "Assistance with meeting industry standards and obtaining necessary accreditations."
        },
        {
            title: "Content Development",
            icon: "✍️",
            description: "Creation of training materials, manuals, and strategic documentation."
        }
    ];

    return (
        <>
            <section className="business-hero" style={{ background: 'linear-gradient(rgba(50, 80, 60, 0.9), rgba(50, 80, 60, 0.8)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) no-repeat center center/cover' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '42px', maxWidth: '800px', margin: '0 auto 20px' }}>
                        Expert Consultancy Services
                    </h1>
                    <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Driving growth and excellence through strategic solutions.
                    </p>
                    <Link to="/contact" className="btn btn-solid" style={{ backgroundColor: '#fff', color: 'var(--brand-green)', borderColor: '#fff' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>

            <section className="business-features">
                <div className="container">
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-desc">We offer a range of specialized services to elevate your business.</p>

                    <div className="b-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {services.map((service, index) => (
                            <div className="b-card" key={index}>
                                <div className="b-icon">{service.icon}</div>
                                <h3 className="b-title">{service.title}</h3>
                                <p className="b-text">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="trusted-by-section" style={{ padding: '60px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '40px', opacity: 0.8 }}>Trusted by leading organizations</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
                        {/* Image Logos */}
                        <img
                            src={bosswaLogo}
                            alt="Bosswa Culinary"
                            style={{ height: '60px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                        />
                        <img
                            src={thitmaLogo}
                            alt="Thitma Quantum"
                            style={{ height: '70px', objectFit: 'contain' }}
                        />

                        <img
                            src={letloleLogo}
                            alt="Letlole La Rona"
                            style={{ height: '50px', objectFit: 'contain' }}
                        />

                        <img
                            src={letshegoLogo}
                            alt="Letshego"
                            style={{ height: '50px', objectFit: 'contain' }}
                        />

                        <img
                            src={unitransLogo}
                            alt="Unitrans"
                            style={{ height: '40px', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </section>

            <section className="quote-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title">Get a Consultancy Quote</h2>
                        <p className="section-desc">Tell us about your project and we'll provide a tailored solution.</p>
                    </div>

                    <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            alert('Thank you! Your quote request has been received. We will be in touch shortly.');
                            e.target.reset();
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <div className="form-group">
                                    <label htmlFor="quote-name" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Name *</label>
                                    <input type="text" id="quote-name" name="name" className="form-input" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quote-company" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Company Name</label>
                                    <input type="text" id="quote-company" name="company" className="form-input" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label htmlFor="quote-email" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email Address *</label>
                                <input type="email" id="quote-email" name="email" className="form-input" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '20px' }}>
                                <label htmlFor="quote-service" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Service Needed *</label>
                                <select id="quote-service" name="service" className="form-select" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff' }}>
                                    <option value="">Select a service...</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service.title}>{service.title}</option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '30px' }}>
                                <label htmlFor="quote-details" className="form-label" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Project Overview *</label>
                                <textarea id="quote-details" name="details" className="form-textarea" required placeholder="Briefly describe your requirements..." style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', height: '120px', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-solid" style={{ width: '100%', padding: '15px', fontSize: '16px', backgroundColor: 'var(--brand-green)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.opacity = '0.9'} onMouseOut={(e) => e.target.style.opacity = '1'}>
                                Request Quote
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConsultancyServices;
