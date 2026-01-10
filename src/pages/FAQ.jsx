const FAQ = () => {
    return (
        <>
            <section class="hero page-hero" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
                <div class="container">
                    <h1 class="hero-title" style={{ fontSize: '36px' }}>Frequently Asked Questions</h1>
                    <p class="hero-subtitle">Answers to common questions about our services.</p>
                </div>
            </section>
            <section class="content-section" style={{ padding: '60px 0' }}>
                <div class="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                        <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <div style={{ fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px', fontSize: '18px' }}>Who are the counsellors?</div>
                            <div style={{ color: '#555', lineHeight: '1.6' }}>Our principal counsellor is Caroline Sithole (MSc, BSc, PSY), a board-certified professional. We have a team of qualified and certified professional counsellors dedicated to your well-being.</div>
                        </div>
                        <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <div style={{ fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px', fontSize: '18px' }}>Is it confidential?</div>
                            <div style={{ color: '#555', lineHeight: '1.6' }}>Yes, absolutely. We adhere to strict international protocols regarding client confidentiality. What you say in therapy stays in therapy, unless there is an immediate risk of harm to yourself or others.</div>
                        </div>
                        <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <div style={{ fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px', fontSize: '18px' }}>How much does it cost?</div>
                            <div style={{ color: '#555', lineHeight: '1.6' }}>Pameltex is committed to being a low-cost provider of psychosocial services while maintaining high-quality standards. Please contact us directly for our current session rates.</div>
                        </div>
                        <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <div style={{ fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px', fontSize: '18px' }}>Can I have online sessions?</div>
                            <div style={{ color: '#555', lineHeight: '1.6' }}>Yes! We offer both online and in-person consultations to suit your convenience and comfort level.</div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ fontWeight: '700', color: 'var(--brand-green)', marginBottom: '10px', fontSize: '18px' }}>What helps with anxiety?</div>
                            <div style={{ color: '#555', lineHeight: '1.6' }}>We use various evidence-based approaches including Cognitive Behavioral Therapy (CBT), Behavior Therapy, and Humanistic Therapy to help manage and treat anxiety.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
