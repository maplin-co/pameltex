import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section class="hero">
                <div class="container hero-container">
                    <h1 class="hero-title">You deserve to be happy.</h1>
                    <p class="hero-subtitle">What type of therapy are you looking for?</p>
                    <div class="therapy-cards">
                        <Link to="/individual-therapy" class="card">
                            <span class="card-label">Individual</span>
                            <span class="card-sub">(For myself)</span>
                            <div class="card-arrow">&rarr;</div>
                        </Link>
                        <Link to="/contact" class="card">
                            <span class="card-label">Couples</span>
                            <span class="card-sub">(For me and my partner)</span>
                            <div class="card-arrow">&rarr;</div>
                        </Link>
                        <Link to="/corporate-services" class="card">
                            <span class="card-label">Corporate</span>
                            <span class="card-sub">(Wellness & Workshops)</span>
                            <div class="card-arrow">&rarr;</div>
                        </Link>
                    </div>
                </div>
            </section>

            <section class="stats-bar">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <strong>International</strong>
                            <span>Accepted Standards</span>
                        </div>
                        <div class="stat-item">
                            <strong>Certified</strong>
                            <span>Professional Counselors</span>
                        </div>
                        <div class="stat-item">
                            <strong>Accessible</strong>
                            <span>Online & In-Person</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="value-props">
                <div class="container">
                    <h2 class="section-title">Professional and qualified therapists who you can trust.</h2>
                    <p class="section-desc">Tap into a network of experienced counselors from the comfort of your own home or office.</p>

                    <div class="comparison-table">
                        <div class="comparison-row header">
                            <div></div>
                            <div class="col-brand">Pameltex</div>
                            <div class="col-other">Traditional</div>
                        </div>
                        <div class="comparison-row">
                            <div class="feature">Convenience</div>
                            <div class="col-brand">Online & In-Person</div>
                            <div class="col-other">In-Office Only</div>
                        </div>
                        <div class="comparison-row">
                            <div class="feature">Protocols</div>
                            <div class="col-brand">International</div>
                            <div class="col-other">Varies</div>
                        </div>
                        <div class="comparison-row">
                            <div class="feature">Corporate Support</div>
                            <div class="col-brand">Specialized Programs</div>
                            <div class="col-other">Limited</div>
                        </div>
                        <div class="comparison-row">
                            <div class="feature">Cost</div>
                            <div class="col-brand">Affordable</div>
                            <div class="col-other">Expensive</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
