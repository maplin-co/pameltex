/**
 * Pameltex SPA Framework
 * A lightweight, vanilla JS router and component system.
 */

// --- Component: Header ---
const Header = () => `
    <header class="header">
        <div class="container header-container">
            <a href="/" class="logo" data-link>
                <span class="logo-p">P</span>ameltex
                <span class="logo-sub">Leading Innovation</span>
            </a>
            <nav class="nav">
                <a href="/our-company" class="nav-link" data-link>Our Company</a>
                <a href="/individual-therapy" class="nav-link" data-link>Individual Therapy</a>
                <a href="/corporate-services" class="nav-link" data-link>Corporate Services</a>
                <a href="/faq" class="nav-link" data-link>FAQ</a>
                <a href="/contact" class="nav-link" data-link>Contact</a>
                <a href="#" class="btn btn-outline">Log in</a>
                <a href="/contact" class="btn btn-solid" data-link>Book Session</a>
            </nav>
            <button class="menu-toggle" aria-label="Menu" onclick="document.querySelector('.nav').classList.toggle('active')">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
`;

// --- Component: Footer ---
const Footer = () => `
    <footer class="footer">
        <div class="container">
            <p style="margin-bottom: 20px; color: #555;"><strong>Contact:</strong> +267 74 672 930 | info@pameltex.com |
                Plot 59716/36c Block 7, Gaborone</p>
            <p class="crisis-text">If you are in a crisis or any other person may be in danger - don't use this site. <a
                    href="#">These resources</a> can provide you with immediate help.</p>
        </div>
    </footer>
`;

// --- Page: Home ---
const Home = () => `
    <section class="hero">
        <div class="container hero-container">
            <h1 class="hero-title">You deserve to be happy.</h1>
            <p class="hero-subtitle">What type of therapy are you looking for?</p>
            <div class="therapy-cards">
                <a href="/individual-therapy" class="card" data-link>
                    <span class="card-label">Individual</span>
                    <span class="card-sub">(For myself)</span>
                    <div class="card-arrow">&rarr;</div>
                </a>
                <a href="/contact" class="card" data-link>
                    <span class="card-label">Couples</span>
                    <span class="card-sub">(For me and my partner)</span>
                    <div class="card-arrow">&rarr;</div>
                </a>
                <a href="/corporate-services" class="card" data-link>
                    <span class="card-label">Corporate</span>
                    <span class="card-sub">(Wellness & Workshops)</span>
                    <div class="card-arrow">&rarr;</div>
                </a>
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
`;

// --- Page: Individual Therapy ---
const IndividualTherapy = () => `
    <section class="hero page-hero" style="padding: 60px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">Individual Therapy</h1>
            <p class="hero-subtitle">Personalized care for anxiety, stress, depression, and personal growth.</p>
        </div>
    </section>

    <section class="content-section" style="padding: 80px 0;">
        <div class="container">
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 class="section-title">Is Therapy Right for You?</h2>
                <p style="font-size: 18px; margin-bottom: 30px; line-height: 1.8;">
                    Individual therapy focuses on "Common Disorders" such as anxiety, stress, and depression. Many
                    people wonder if their feelings are "normal" or if they need professional help.
                </p>

                <div style="background: #fff; padding: 30px; border-radius: 8px; border: 1px solid #eee; margin-bottom: 40px;">
                    <h3 style="color: var(--accent-orange); margin-bottom: 15px;">Understanding Anxiety</h3>
                    <p>Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel
                        restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress. For
                        example, you might feel anxious when faced with a difficult problem at work, before taking a
                        test, or before making an important decision.</p>
                    <br>
                    <p><strong>However, if these feelings persist and affect your daily life, it may be time to
                            speak with a professional.</strong></p>
                </div>

                <h3 style="color: var(--accent-purple); margin-bottom: 20px;">Our Therapeutic Approaches</h3>
                <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <li style="background: #fff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                        <strong style="color: var(--brand-green);">Behavior Therapy</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Focuses on the role of learning in developing
                            both normal and abnormal behaviors.</p>
                    </li>
                    <li style="background: #fff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                        <strong style="color: var(--brand-green);">Cognitive Therapy</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Focuses on what people think rather than what
                            they do.</p>
                    </li>
                    <li style="background: #fff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                        <strong style="color: var(--brand-green);">Humanistic Therapy</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Emphasizes people's capacity to make rational
                            choices and develop to their maximum potential.</p>
                    </li>
                    <li style="background: #fff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                        <strong style="color: var(--brand-green);">Psychoanalysis</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Explores unconscious meanings and motivations.
                        </p>
                    </li>
                </ul>

                <div style="text-align: center; margin-top: 50px;">
                    <a href="/contact" class="btn btn-solid" data-link
                        style="padding: 15px 40px; font-size: 18px;">Schedule a Consultation</a>
                </div>
            </div>
        </div>
    </section>
`;

// --- Page: Corporate Services ---
const CorporateServices = () => `
    <section class="hero page-hero" style="padding: 60px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">Corporate Services</h1>
            <p class="hero-subtitle">Wellness programs, workshops, and change management for a healthy workplace.</p>
        </div>
    </section>
    <section class="content-section" style="padding: 80px 0;">
        <div class="container">
             <div style="max-width: 900px; margin: 0 auto;">
                <div style="display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap;">
                    <div style="flex: 1;">
                        <h2 class="section-title" style="text-align: left;">Supporting Your Workforce</h2>
                        <p style="margin-bottom: 20px;">
                            A healthy workforce is a productive workforce. Pameltex offers specialized corporate
                            counselling designed to address stress, burnout, and workplace conflicts.
                        </p>
                        <p>
                            We focus on employee well-being, fostering open communication, and utilizing a
                            strengths-based approach to improve overall organizational health.
                        </p>
                    </div>
                     <div style="flex: 1; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 4px solid var(--accent-orange); min-width: 300px;">
                        <h3 style="margin-bottom: 15px; color: var(--brand-green);">Our Corporate Solutions</h3>
                        <ul style="list-style-position: inside; line-height: 2;">
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
`;

// --- Page: Our Company ---
const OurCompany = () => `
    <section class="hero page-hero" style="padding: 60px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">Our Company</h1>
            <p class="hero-subtitle">Leading innovation in psychosocial support and mental health consultancy.</p>
        </div>
    </section>
    <section class="content-section">
        <div class="container">
            <div class="two-col-grid"
                style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px;">
                <div>
                    <h2 class="section-title" style="text-align: left;">Who We Are</h2>
                    <p style="margin-bottom: 20px;">Pameltex (pty) Ltd, commonly known as Pameltex Psychosocial and
                        Counselling, is a leading provider of psychosocial services in Botswana. We are dedicated to
                        helping humanity by improving the quality of life through professional support.</p>
                    <p>We pride ourselves on being a low-cost provider that never compromises on quality, using
                        internationally accepted treatment and referral protocols to ensure the best care for our
                        clients.</p>
                </div>
                <div>
                    <div class="mission-box"
                        style="background: #fff; padding: 30px; border-left: 4px solid var(--accent-orange); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: var(--brand-green); margin-bottom: 10px;">Our Mission</h3>
                        <p>To provide friendly and professional psycho-social support, counselling, and practical
                            mental health solutions that empower individuals to live happier lives.</p>
                    </div>
                    <div class="vision-box"
                        style="background: #fff; padding: 30px; border-left: 4px solid var(--brand-green); box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin-top: 20px;">
                        <h3 style="color: var(--accent-orange); margin-bottom: 10px;">Our Vision</h3>
                        <p>To grow as the best affordable psycho-social support provider and consultancy in the
                            country.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="team-section" style="background: #fffcf6; padding: 80px 0; margin-top: 60px;">
        <div class="container">
            <h2 class="section-title">Meet Our Team</h2>
            <div class="team-card"
                style="background: white; max-width: 800px; margin: 40px auto; display: flex; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); flex-direction:row; flex-wrap:wrap;">
                <div class="team-img" style="flex:1; min-width:300px; background: #ddd; min-height: 300px;">
                    <!-- Placeholder for Caroline Sithole's image -->
                    <div
                        style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #e0e0e0; color: #888;">
                        Caroline Sithole Photo
                    </div>
                </div>
                <div class="team-info" style="padding: 40px; flex: 1; min-width:300px;">
                    <h3 style="font-size: 24px; color: var(--brand-green); margin-bottom: 5px;">Caroline Sithole
                    </h3>
                    <p style="color: #666; font-weight: 600; margin-bottom: 20px;">MSc, BSc, PSY — Principal
                        Counsellor</p>
                    <p style="margin-bottom: 15px;">Caroline is a board-certified counsellor majoring in Cognitive
                        Behavioral Therapy (CBT). Her philosophy is to act as a mentor, guiding clients toward
                        self-reliance and self-discovery.</p>
                    <p>"My mission is to help people live happier, more fulfilling lives through professional
                        guidance and support."</p>
                </div>
            </div>
        </div>
    </section>
`;

// --- Page: FAQ ---
const FAQ = () => `
    <section class="hero page-hero" style="padding: 60px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">Frequently Asked Questions</h1>
            <p class="hero-subtitle">Answers to common questions about our services.</p>
        </div>
    </section>
    <section class="content-section" style="padding: 60px 0;">
        <div class="container">
            <div style="max-width: 800px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                    <div style="font-weight: 700; color: var(--brand-green); margin-bottom: 10px; font-size: 18px;">Who are the counsellors?</div>
                    <div style="color: #555; line-height: 1.6;">Our principal counsellor is Caroline Sithole (MSc, BSc, PSY), a board-certified professional. We have a team of qualified and certified professional counsellors dedicated to your well-being.</div>
                </div>
                <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                    <div style="font-weight: 700; color: var(--brand-green); margin-bottom: 10px; font-size: 18px;">Is it confidential?</div>
                    <div style="color: #555; line-height: 1.6;">Yes, absolutely. We adhere to strict international protocols regarding client confidentiality. What you say in therapy stays in therapy, unless there is an immediate risk of harm to yourself or others.</div>
                </div>
                <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                    <div style="font-weight: 700; color: var(--brand-green); margin-bottom: 10px; font-size: 18px;">How much does it cost?</div>
                    <div style="color: #555; line-height: 1.6;">Pameltex is committed to being a low-cost provider of psychosocial services while maintaining high-quality standards. Please contact us directly for our current session rates.</div>
                </div>
                <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
                    <div style="font-weight: 700; color: var(--brand-green); margin-bottom: 10px; font-size: 18px;">Can I have online sessions?</div>
                    <div style="color: #555; line-height: 1.6;">Yes! We offer both online and in-person consultations to suit your convenience and comfort level.</div>
                </div>
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: 700; color: var(--brand-green); margin-bottom: 10px; font-size: 18px;">What helps with anxiety?</div>
                    <div style="color: #555; line-height: 1.6;">We use various evidence-based approaches including Cognitive Behavioral Therapy (CBT), Behavior Therapy, and Humanistic Therapy to help manage and treat anxiety.</div>
                </div>
            </div>
        </div>
    </section>
`;

// --- Page: Contact ---
const Contact = () => `
    <section class="hero page-hero" style="padding: 60px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">Contact Us</h1>
            <p class="hero-subtitle">Get in touch to book your session or learn more.</p>
        </div>
    </section>

    <section class="content-section" style="padding: 80px 0;">
        <div class="container">
            <div class="contact-grid">
                <div>
                    <h2 class="section-title" style="text-align: left;">Get in Touch</h2>
                    <p style="margin-bottom: 30px;">Fill out the form to request a consultation or ask a question.</p>

                    <div style="background: #fff; padding: 25px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                        <h3 style="font-size: 18px; margin-bottom: 10px; color: var(--brand-green);">Visit Us</h3>
                        <p>Plot 59716/36c Block 7<br>Gaborone, Botswana</p>
                    </div>

                    <div style="background: #fff; padding: 25px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                        <h3 style="font-size: 18px; margin-bottom: 10px; color: var(--brand-green);">Call or WhatsApp</h3>
                        <p>+267 74 672 930<br>+267 72 534 203</p>
                    </div>

                    <div style="background: #fff; padding: 25px; border-radius: 8px; border: 1px solid #eee;">
                        <h3 style="font-size: 18px; margin-bottom: 10px; color: var(--brand-green);">Email</h3>
                        <p>info@pameltex.com<br>pameltex@gmail.com</p>
                    </div>
                </div>

                <div style="background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border-top: 4px solid var(--brand-green);">
                    <form id="contactForm" onsubmit="handleContactSubmit(event)">
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label for="name" class="form-label" style="display:block; margin-bottom:8px; font-weight:600;">Name *</label>
                            <input type="text" id="name" name="name" class="form-input" required style="width:100%; padding:12px; border:1px solid #ddd; border-radius:4px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label for="email" class="form-label" style="display:block; margin-bottom:8px; font-weight:600;">Email *</label>
                            <input type="email" id="email" name="email" class="form-input" required style="width:100%; padding:12px; border:1px solid #ddd; border-radius:4px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label for="type" class="form-label" style="display:block; margin-bottom:8px; font-weight:600;">Type of Consultation *</label>
                            <select id="type" name="type" class="form-select" style="width:100%; padding:12px; border:1px solid #ddd; border-radius:4px;">
                                <option value="online">Online</option>
                                <option value="in_person">In Person</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label for="message" class="form-label" style="display:block; margin-bottom:8px; font-weight:600;">Message *</label>
                            <textarea id="message" name="message" class="form-textarea" required style="width:100%; padding:12px; border:1px solid #ddd; border-radius:4px; height:150px; resize:vertical;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-solid" style="width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;

// --- 404 Page ---
const NotFound = () => `
    <section class="hero page-hero" style="padding: 100px 0; background: var(--bg-dark);">
        <div class="container">
            <h1 class="hero-title" style="font-size: 36px;">404 - Page Not Found</h1>
            <p class="hero-subtitle">The page you are looking for does not exist.</p>
            <a href="/" class="btn btn-solid" data-link>Return Home</a>
        </div>
    </section>
`;

// --- Router Logic ---
const routes = {
    '/': Home,
    '/index.html': Home,
    '/contact': Contact,
    '/contact.html': Contact,
    '/our-company': OurCompany,
    '/individual-therapy': IndividualTherapy,
    '/corporate-services': CorporateServices,
    '/faq': FAQ,
};

const router = async () => {
    const app = document.getElementById('app');
    let path = window.location.pathname;

    // Handle root /pameltex paths if deployed in subfolder, but we assume root for Hostinger
    // Basic normalization
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    // If not found, check if it's a known route, else 404
    const page = routes[path] || NotFound;

    app.innerHTML = Header() + '<main>' + page() + '</main>' + Footer();

    // Re-attach event listeners for navigation
    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigateTo(e.currentTarget.getAttribute('href'));
        });
    });
};

const navigateTo = url => {
    window.history.pushState(null, null, url);
    router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
});

// --- Form Handling (Global Access) ---
window.handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Show loading state
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                form.reset();
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a network error. Please try again later.');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
};
