import profileImg from '../assets/profile-placeholder.png';
import alpheausImg from '../assets/alpheaus.jpg';
import thamuImg from '../assets/thamu.jpg';
import carolineImg from '../assets/caroline.jpg';

const OurCompany = () => {
    return (
        <>
            <section className="hero page-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <h1 className="hero-title" style={{ fontSize: '36px' }}>Our Company</h1>
                    <p className="hero-subtitle">Leading innovation in psychosocial support and mental health consultancy.</p>
                </div>
            </section>
            <section className="content-section">
                <div className="container">
                    <div className="two-col-grid"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
                            <p style={{ marginBottom: '20px' }}>Pameltex (pty) Ltd, commonly known as Pameltex Psychosocial and
                                Counselling, is a leading provider of psychosocial services in Botswana. We are dedicated to
                                helping humanity by improving the quality of life through professional support.</p>
                            <p>We pride ourselves on being a low-cost provider that never compromises on quality, using
                                internationally accepted treatment and referral protocols to ensure the best care for our
                                clients.</p>
                        </div>
                        <div>
                            <div className="mission-box"
                                style={{ background: '#fff', padding: '30px', borderLeft: '4px solid var(--brand-purple)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: 'var(--brand-teal)', marginBottom: '10px' }}>Our Mission</h3>
                                <p>To provide friendly and professional psycho-social support, counselling, and practical
                                    mental health solutions that empower individuals to live happier lives.</p>
                            </div>
                            <div className="vision-box"
                                style={{ background: '#fff', padding: '30px', borderLeft: '4px solid var(--brand-teal)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginTop: '20px' }}>
                                <h3 style={{ color: 'var(--brand-purple)', marginBottom: '10px' }}>Our Vision</h3>
                                <p>To grow as the best affordable psycho-social support provider and consultancy in the
                                    country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section" style={{ background: '#fffcf6', padding: '80px 0', marginTop: '60px' }}>
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    {/* Principal Counselor - Full Width */}
                    <div className="team-card"
                        style={{ background: 'white', maxWidth: '900px', margin: '0 auto 40px auto', display: 'flex', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <div className="team-img" style={{ flex: 1, minWidth: '300px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={carolineImg} alt="Caroline Sithole" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="team-info" style={{ padding: '40px', flex: 1.5, minWidth: '300px' }}>
                            <h3 style={{ fontSize: '28px', color: 'var(--brand-purple)', marginBottom: '5px' }}>Caroline Sithole
                            </h3>
                            <p style={{ color: '#666', fontWeight: '600', marginBottom: '20px', fontSize: '18px' }}>MSc, BSc, PSY — Principal
                                Counsellor</p>
                            <p style={{ marginBottom: '15px', fontSize: '16px' }}>Caroline is a board-certified counsellor majoring in Cognitive
                                Behavioral Therapy (CBT). Her philosophy is to act as a mentor, guiding clients toward
                                self-reliance and self-discovery.</p>
                            <p className="team-quote" style={{ fontStyle: 'italic', color: 'var(--brand-teal)' }}>"My mission is to help people live happier, more fulfilling lives through professional
                                guidance and support."</p>
                        </div>
                    </div>

                    {/* The Rest - Side by Side Grid */}
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>

                        <div className="team-card-vertical"
                            style={{ background: 'white', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                            <div className="team-img" style={{ height: '300px', background: '#e0f7fa', width: '100%' }}>
                                <img src={thamuImg} alt="Thamu Gordon Mthupa" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="team-info" style={{ padding: '30px', flex: 1 }}>
                                <h3 style={{ fontSize: '22px', color: 'var(--brand-purple)', marginBottom: '5px' }}>Thamu Gordon Mthupa</h3>
                                <p style={{ color: '#666', fontWeight: '600', marginBottom: '15px' }}>Lead Counselor</p>
                                <p style={{ marginBottom: '15px', fontSize: '15px' }}>Thamu leads our counseling department with compassion and expertise. He is dedicated to fostering a supportive environment for our clients.</p>
                                <p style={{ fontStyle: 'italic', color: 'var(--brand-teal)', fontSize: '14px' }}>"Empowering individuals to overcome life's challenges."</p>
                            </div>
                        </div>

                        <div className="team-card-vertical"
                            style={{ background: 'white', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                            <div className="team-img" style={{ height: '300px', background: '#f3e5f5', width: '100%' }}>
                                <img src={alpheausImg} alt="Alpheaus Chiwaze" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="team-info" style={{ padding: '30px', flex: 1 }}>
                                <h3 style={{ fontSize: '22px', color: 'var(--brand-purple)', marginBottom: '5px' }}>Alpheaus Chiwaze</h3>
                                <p style={{ color: '#666', fontWeight: '600', marginBottom: '15px' }}>Head of IT</p>
                                <p style={{ marginBottom: '15px', fontSize: '15px' }}>Alpheaus is a multi-disciplinary creative and technologist specializing in premium web design, development, and digital experiences.</p>
                                <p style={{ fontStyle: 'italic', color: 'var(--brand-teal)', fontSize: '14px' }}>"Technology bridges the gap between expert care and those who need it most."</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default OurCompany;
