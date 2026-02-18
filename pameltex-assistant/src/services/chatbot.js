const systemPrompt = require('../config/systemPrompt');

/**
 * Rule-based chatbot that responds based on keywords and patterns
 * No AI API needed - uses the comprehensive knowledge base
 */

// Knowledge base extracted from system prompt
const knowledgeBase = {
    services: {
        individual: {
            keywords: ['individual', 'therapy', 'personal', 'anxiety', 'stress', 'depression', 'counseling', 'counselling'],
            response: `**Individual Therapy at Pameltex**

We offer professional individual therapy for:
• Anxiety & Stress Management
• Depression & Mood Disorders
• Personal Growth & Self-Development
• Relationship Issues
• Trauma & PTSD
• Grief & Loss
• Self-Esteem & Confidence
• Life Transitions

**Our Approach:**
We specialize in Cognitive Behavioral Therapy (CBT), along with Behavior Therapy, Humanistic Therapy, and Psychoanalysis.

**Session Details:**
• 50-60 minute sessions
• Available online (Zoom/Google Meet) or in-person
• Flexible scheduling including evenings
• Affordable rates

**Book a Free Consultation:**
📅 https://calendly.com/pameltex-info/30min
📞 +267 72 534 203
📧 info@pameltex.com`
        },
        couples: {
            keywords: ['couple', 'couples', 'marriage', 'relationship', 'partner', 'married'],
            response: `**Couples Therapy at Pameltex**

We help couples with:
• Communication problems
• Trust and intimacy issues
• Conflict resolution
• Pre-marital counseling
• Relationship strengthening
• Infidelity recovery
• Co-parenting challenges

**Format:** Joint sessions with both partners, 60-90 minutes

**Book Your Session:**
📅 https://calendly.com/pameltex-info/30min
📞 +267 72 534 203
📧 info@pameltex.com`
        },
        corporate: {
            keywords: ['corporate', 'business', 'company', 'organization', 'workplace', 'employee', 'team'],
            response: `**Corporate Services at Pameltex**

We partner with organizations for:
• Employee Wellness Programs
• Mental Health Workshops & Training
• Stress Management Seminars
• Team Building & Communication
• Crisis Intervention
• Workplace Conflict Resolution
• Burnout Prevention Programs
• Leadership Coaching

**Notable Clients:**
✓ Letlole La Rona
✓ Unitrans
✓ Letshego
✓ Various government departments

**Customized packages** available based on your organization's size and needs.

**Contact us for a consultation:**
📞 +267 72 534 203
📧 info@pameltex.com`
        }
    },

    booking: {
        keywords: ['book', 'appointment', 'schedule', 'session', 'consultation', 'calendly'],
        response: `**How to Book Your Session**

**Option 1: Online Booking (Recommended)**
📅 Visit: https://calendly.com/pameltex-info/30min
Choose your preferred date and time - instant confirmation!

**Option 2: Phone Booking**
📞 Call: +267 72 534 203 (Primary)
📞 Alternative: +267 71 234 567
⏰ Available: Mon-Fri, 8AM-5PM

**Option 3: Email Booking**
📧 Email: info@pameltex.com
We respond within 24 hours

**First Session:**
Your initial consultation is 30 minutes and FREE! We'll discuss your concerns, goals, and recommend the best approach for you.

May I have your name and phone number so we can follow up with you?`
    },

    pricing: {
        keywords: ['price', 'cost', 'fee', 'charge', 'afford', 'expensive', 'cheap', 'payment'],
        response: `**Affordable Mental Health Care**

We're proud to be one of the most affordable mental health providers in Botswana without compromising quality.

**Pricing:**
Specific pricing is discussed during your FREE 30-minute initial consultation, as we tailor our services to your needs.

**Payment Methods:**
• Cash
• Bank Transfer
• Mobile Money

**Why Choose Us:**
✓ Low-cost provider
✓ Professional excellence
✓ No hidden fees
✓ Flexible payment options

**Book your FREE consultation:**
📅 https://calendly.com/pameltex-info/30min
📞 +267 72 534 203`
    },

    team: {
        keywords: ['counselor', 'counsellor', 'therapist', 'psychologist', 'caroline', 'who', 'team', 'staff'],
        response: `**Our Professional Team**

**Caroline Sithole** - Principal Counsellor
• Qualifications: MSc, BSc, PSY
• Specialization: Cognitive Behavioral Therapy (CBT)
• Approach: Mentors clients toward self-reliance and personal growth

**Thamu X Gordon Mthupa** - Lead Counselor
• Leadership: Leads with compassion and expertise
• Focus: Client-centered therapeutic approaches

**Alpheaus Chiwaze** - Head of Operations
• Role: Ensures smooth operations and excellent client experience

All our counselors are qualified professionals committed to your wellbeing.`
    },

    contact: {
        keywords: ['contact', 'phone', 'email', 'address', 'location', 'where', 'find'],
        response: `**Contact Pameltex**

📞 **Phone:**
+267 72 534 203 (Primary)
+267 71 234 567 (Alternative)

📧 **Email:**
info@pameltex.com

📍 **Address:**
Plot 18680 Khuhurutse St
Phase 2, Gaborone, Botswana

🕐 **Office Hours:**
Monday - Friday: 8:00 AM - 5:00 PM
Saturday: By appointment only
Sunday: Closed

🌐 **Website:**
www.pameltex.com

📅 **Book Online:**
https://calendly.com/pameltex-info/30min`
    },

    confidentiality: {
        keywords: ['confidential', 'private', 'secret', 'privacy', 'trust', 'safe'],
        response: `**Your Privacy is Our Priority**

🔒 **Strict Confidentiality:**
Everything discussed in sessions is completely private and confidential.

✓ We follow international counseling ethics protocols
✓ All client information is stored securely
✓ HIPAA-compliant for online sessions
✓ Your trust is sacred to us

**The Only Exception:**
We may need to break confidentiality ONLY if there's immediate risk of harm to yourself or others.

You can speak freely and openly with complete confidence.`
    },

    online: {
        keywords: ['online', 'virtual', 'zoom', 'video', 'remote', 'internet'],
        response: `**Online Therapy Sessions**

Yes! We offer secure online sessions via:
• Zoom
• Google Meet

**Benefits of Online Therapy:**
✓ Convenience - from home or office
✓ Flexible scheduling
✓ Same professional quality
✓ Secure and confidential
✓ HIPAA-compliant platforms

**Perfect for:**
• Busy schedules
• Those outside Gaborone
• Comfort of your own space
• Social distancing preferences

**Book your online session:**
📅 https://calendly.com/pameltex-info/30min
📞 +267 72 534 203`
    },

    languages: {
        keywords: ['language', 'setswana', 'english', 'speak', 'tswana'],
        response: `**Dumela! / Hello!**

We're fluent in both:
🇧🇼 **Setswana**
🇬🇧 **English**

You can speak in whichever language you're most comfortable with. We understand that discussing personal matters is easier in your preferred language.

Re bua Setswana le Sekgoa ka botlalo!

How can I help you today? / Nka go thusa jang?`
    },

    crisis: {
        keywords: ['suicide', 'kill myself', 'self-harm', 'harm myself', 'die', 'end it', 'emergency'],
        response: `**⚠️ IMMEDIATE HELP NEEDED**

I'm concerned about your safety. Please:

🚨 **If you're in immediate danger:**
• Call emergency services: 997
• Go to the nearest hospital immediately
• Contact a trusted friend or family member NOW

**Crisis Support:**
We can provide ongoing professional support once you're safe.

📞 **Call us:** +267 72 534 203

You are not alone. Help is available. Please reach out immediately.`
    }
};

// Greeting responses
const greetings = {
    keywords: ['hello', 'hi', 'hey', 'dumela', 'greetings', 'good morning', 'good afternoon'],
    responses: [
        "Hello! / Dumela! I'm Luna, your Pameltex assistant. How can I help you today?",
        "Hi there! Welcome to Pameltex. I'm here to help you with information about our mental health services. What can I assist you with?",
        "Dumela! / Hello! Welcome to Pameltex Psychosocial & Counseling. How may I help you today?"
    ]
};

// FAQ responses
const faqs = {
    'how long': 'Therapy duration varies by individual. Some see improvement in 6-8 sessions, while others benefit from longer-term support. We will discuss this during your free initial consultation.',
    'first session': 'Your first session is a FREE 30-minute consultation where we discuss your concerns, goals, and recommend the best therapeutic approach for you.',
    'what is cbt': 'Cognitive Behavioral Therapy (CBT) is our specialty. It is an evidence-based approach that helps you identify and change negative thought patterns and behaviors. It is highly effective for anxiety, depression, and many other concerns.',
    'do you take insurance': 'Please contact us directly to discuss payment options and insurance. We offer affordable rates and flexible payment methods including cash, bank transfer, and mobile money.'
};

/**
 * Process user message and generate response
 */
const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();

    // Check for crisis keywords first
    if (knowledgeBase.crisis.keywords.some(kw => lowerMessage.includes(kw))) {
        return {
            response: knowledgeBase.crisis.response,
            category: 'crisis',
            collectLead: false
        };
    }

    // Check for greetings
    if (greetings.keywords.some(kw => lowerMessage.includes(kw))) {
        return {
            response: greetings.responses[Math.floor(Math.random() * greetings.responses.length)],
            category: 'greeting',
            collectLead: false
        };
    }

    // Check knowledge base categories
    for (const [category, data] of Object.entries(knowledgeBase)) {
        if (data.keywords && data.keywords.some(kw => lowerMessage.includes(kw))) {
            return {
                response: data.response,
                category: category,
                collectLead: category === 'booking' || category === 'services'
            };
        }
    }

    // Check FAQs
    for (const [question, answer] of Object.entries(faqs)) {
        if (lowerMessage.includes(question)) {
            return {
                response: answer,
                category: 'faq',
                collectLead: false
            };
        }
    }

    // Default response
    return {
        response: `I'd be happy to help you! I can provide information about:

• **Individual Therapy** - anxiety, stress, depression, personal growth
• **Couples Therapy** - relationship support and counseling
• **Corporate Services** - employee wellness programs
• **Booking** - how to schedule your session
• **Our Team** - meet our qualified counselors
• **Pricing** - affordable mental health care
• **Contact** - phone, email, location

What would you like to know more about?

Or, you can book a FREE 30-minute consultation:
📅 https://calendly.com/pameltex-info/30min
📞 +267 72 534 203`,
        category: 'general',
        collectLead: false
    };
};

module.exports = { processMessage };
