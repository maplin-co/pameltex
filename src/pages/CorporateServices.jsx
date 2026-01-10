const CorporateServices = () => {
    return (
        <>
            <section class="hero page-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
                <div class="container">
                    <h1 class="hero-title" style={{ fontSize: '36px' }}>Corporate Services</h1>
                    <p class="hero-subtitle">Wellness programs, workshops, and change management for a healthy workplace.</p>
                </div>
            </section>
            <section class="content-section" style={{ padding: '80px 0' }}>
                <div class="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1 }}>
                                <h2 class="section-title" style={{ textAlign: 'left' }}>Supporting Your Workforce</h2>
                                <p style={{ marginBottom: '20px' }}>
                                    A healthy workforce is a productive workforce. Pameltex offers specialized corporate
                                    counselling designed to address stress, burnout, and workplace conflicts.
                                </p>
                                <p>
                                    We focus on employee well-being, fostering open communication, and utilizing a
                                    strengths-based approach to improve overall organizational health.
                                </p>
                            </div>
                            <div style={{ flex: 1, background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid var(--accent-orange)', minWidth: '300px' }}>
                                <h3 style={{ marginBottom: '15px', color: 'var(--brand-green)' }}>Our Corporate Solutions</h3>
                                <ul style={{ listStylePosition: 'inside', lineHeight: 2 }}>
                                    <li>Employee Wellness Programs</li>
                                    <li>Stress Management Workshops</li>
                                    <li>Change Management Consulting</li>
                                    <li>Leadership Development</li>
                                    <li>Conflict Resolution</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CorporateServices;
