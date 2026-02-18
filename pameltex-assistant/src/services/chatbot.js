const systemPrompt = require('../config/systemPrompt');

/**
 * Rule-based chatbot that responds based on keywords and patterns
 * No AI API needed - uses the comprehensive knowledge base
 */

// Knowledge base
const knowledgeBase = {
    services: {
        individual: {
            keywords: ['individual', 'therapy', 'personal', 'anxiety', 'stress', 'depression', 'counseling', 'counselling', 'mental health'],
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
We specialise in Cognitive Behavioural Therapy (CBT), along with Behaviour Therapy, Humanistic Therapy, and Psychoanalysis.

**Session Details:**
• 50–60 minute sessions
• Available online (Zoom/Google Meet) or in-person
• Flexible scheduling including evenings
• Affordable rates

Would you like us to get in touch with you? Share your name and number and we'll reach out. 📞`
        },
        couples: {
            keywords: ['couple', 'couples', 'marriage', 'relationship', 'partner', 'married'],
            response: `**Couples Therapy at Pameltex**

We help couples navigate:
• Communication difficulties
• Trust and intimacy issues
• Conflict resolution
• Pre-marital counselling
• Relationship strengthening
• Infidelity recovery
• Co-parenting challenges

**Format:** Joint sessions with both partners, 60–90 minutes.

Would you like us to reach out to you? Leave your name and contact number and we'll be in touch. 📞`
        },
        corporate: {
            keywords: ['corporate', 'business', 'company', 'organization', 'organisation', 'workplace', 'employee', 'team', 'staff wellness'],
            response: `**Corporate Services at Pameltex**

We partner with organisations to support employee wellbeing through:
• Employee Wellness Programmes
• Mental Health Workshops & Training
• Stress Management Seminars
• Team Building & Communication
• Crisis Intervention
• Workplace Conflict Resolution
• Burnout Prevention Programmes
• Leadership Coaching

**Notable Clients:**
✓ Letlole La Rona  ✓ Unitrans  ✓ Letshego  ✓ Various government departments

Customised packages available based on your organisation's size and needs.

Interested in a proposal? Leave your name, number and email and we'll get back to you. 📧`
        }
    },

    booking: {
        keywords: ['book', 'appointment', 'schedule', 'session', 'consultation', 'reserve', 'how do i book'],
        response: `**Booking a Session at Pameltex**

Getting started is simple:

📅 **Book Online**
Visit our booking page: www.pameltex.com/booking
Choose your preferred date and time — instant confirmation!

📞 **Call Us**
+267 72 534 203
Monday – Friday, 8:00 AM – 5:00 PM

📧 **Email Us**
info@pameltex.com

**What to Expect:**
Your first session is an initial consultation where we discuss your concerns, goals, and recommend the best approach for you.

To make it even easier — share your **name, phone number, and email** and our team will contact you to arrange your session. 😊`
    },

    pricing: {
        keywords: ['price', 'cost', 'fee', 'charge', 'afford', 'expensive', 'cheap', 'payment', 'rate', 'how much'],
        response: `**Affordable Mental Health Care**

Pameltex is proud to be one of the most affordable mental health providers in Botswana — without compromising on quality.

Pricing is personalised and discussed during your initial consultation based on your specific needs.

**Payment Methods Accepted:**
• Cash
• Bank Transfer
• Mobile Money

**Why Choose Pameltex:**
✓ Competitive, transparent rates
✓ Professional excellence
✓ No hidden fees
✓ Flexible payment options

To discuss pricing, contact us:
📞 +267 72 534 203
📧 info@pameltex.com`
    },

    team: {
        keywords: ['counselor', 'counsellor', 'therapist', 'psychologist', 'caroline', 'who', 'team', 'staff', 'qualifications'],
        response: `**Our Professional Team**

**Caroline Sithole** — Principal Counsellor
• Qualifications: MSc, BSc, PSY
• Specialisation: Cognitive Behavioural Therapy (CBT)
• Approach: Mentors clients toward self-reliance and personal growth

**Thamu X Gordon Mthupa** — Lead Counsellor
• Leads with compassion and expertise
• Focus: Client-centred therapeutic approaches

**Alpheaus Chiwaze** — Head of Operations
• Ensures a smooth, excellent client experience

All our counsellors are qualified professionals dedicated to your wellbeing and growth.`
    },

    contact: {
        keywords: ['contact', 'phone', 'email', 'address', 'location', 'where', 'find us', 'office'],
        response: `**Contact Pameltex**

📞 **Phone:** +267 72 534 203

📧 **Email:** info@pameltex.com

📍 **Address:**
Plot 18680 Khuhurutse St, Phase 2
Gaborone, Botswana

🕐 **Office Hours:**
Monday – Friday: 8:00 AM – 5:00 PM
Saturday: By appointment only
Sunday: Closed

🌐 **Website:** www.pameltex.com`
    },

    confidentiality: {
        keywords: ['confidential', 'private', 'secret', 'privacy', 'trust', 'safe'],
        response: `**Your Privacy is Our Priority**

🔒 Everything discussed in your sessions is completely private and confidential.

✓ We follow international counselling ethics protocols
✓ All client information is stored securely
✓ Secure, encrypted platforms used for online sessions
✓ Your trust is sacred to us

**The Only Exception:**
Confidentiality may only be broken if there is an immediate risk of harm to yourself or others — as required by professional ethics.

You can speak freely and openly with complete confidence.`
    },

    online: {
        keywords: ['online', 'virtual', 'zoom', 'video', 'remote', 'internet'],
        response: `**Online Therapy Sessions**

Yes — we offer secure, professional online sessions via:
• Zoom
• Google Meet

**Benefits of Online Therapy:**
✓ Attend from home, work, or anywhere
✓ Flexible scheduling to suit your lifestyle
✓ Same professional quality as in-person sessions
✓ Secure and confidential platforms

**Ideal for:**
• Busy professionals
• Clients outside Gaborone
• Those who prefer the comfort of their own space

To book your online session:
📞 +267 72 534 203
📧 info@pameltex.com`
    },

    languages: {
        keywords: ['language', 'setswana', 'english', 'speak', 'tswana'],
        response: `**Dumela! / Hello!**

We offer sessions in both:
🇧🇼 **Setswana**
🇬🇧 **English**

You are welcome to speak in whichever language you feel most comfortable with.

Re bua Setswana le Sekgoa ka botlalo!

How can I help you today? / Nka go thusa jang?`
    },

    crisis: {
        keywords: ['suicide', 'kill myself', 'self-harm', 'harm myself', 'die', 'end it', 'emergency'],
        response: `**⚠️ Immediate Support**

I'm concerned about your safety. Please reach out for help right now:

🚨 **If you are in immediate danger:**
• Call emergency services: **997**
• Go to the nearest hospital immediately
• Contact a trusted person right now

📞 **Call Pameltex:** +267 72 534 203

You are not alone. Help is available. Please reach out — we care about you.`
    }
};

// Greeting responses
const greetings = {
    keywords: ['hello', 'hi', 'hey', 'dumela', 'greetings', 'good morning', 'good afternoon', 'good evening', 'start'],
    responses: [
        "Hello! / Dumela! I'm Luna, your Pameltex assistant. How can I help you today?",
        "Hi there! Welcome to Pameltex. I'm here to help with information about our mental health services. What can I assist you with?",
        "Dumela! Welcome to Pameltex Psychosocial & Counselling. How may I help you today?"
    ]
};

// FAQ responses
const faqs = {
    'how long': 'The duration of therapy varies by individual. Some clients see meaningful progress in 6–8 sessions, while others benefit from longer-term support. We will discuss this during your initial consultation.',
    'first session': 'Your first session is an initial consultation where we discuss your concerns, goals, and recommend the most suitable therapeutic approach for you.',
    'what is cbt': 'Cognitive Behavioural Therapy (CBT) is our primary specialisation. It is an evidence-based approach that helps you identify and change unhelpful thought patterns and behaviours. It is highly effective for anxiety, depression, and many other concerns.',
    'do you take insurance': 'Please contact us directly to discuss payment options. We offer affordable rates and flexible payment methods including cash, bank transfer, and mobile money.'
};

/**
 * Process user message and generate response
 */
const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();

    // Check for crisis keywords first (highest priority)
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
            // Trigger lead collection for service inquiries and booking
            const shouldCollect = ['booking', 'individual', 'couples', 'corporate'].includes(category) ||
                (knowledgeBase.services && knowledgeBase.services[category]);
            return {
                response: data.response,
                category: category,
                collectLead: category === 'booking' ||
                    category === 'individual' ||
                    category === 'couples' ||
                    category === 'corporate'
            };
        }
    }

    // Check nested services
    for (const [serviceKey, serviceData] of Object.entries(knowledgeBase.services)) {
        if (serviceData.keywords && serviceData.keywords.some(kw => lowerMessage.includes(kw))) {
            return {
                response: serviceData.response,
                category: serviceKey,
                collectLead: true
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

    // Default response — professional with clear service options
    return {
        response: `Thank you for reaching out to **Pameltex Psychosocial & Counselling**. I'm Luna, your virtual assistant.

I can help you with information on:

🧠 **Individual Therapy** — anxiety, stress, depression, personal growth
💑 **Couples Therapy** — relationship and communication support
🏢 **Corporate Services** — employee wellness programmes
📋 **Booking** — how to schedule your session
👥 **Our Team** — meet our qualified counsellors
💰 **Pricing** — affordable mental health care
📍 **Contact** — phone, email, location

Simply type what you'd like to know more about, or reach us directly:
📞 +267 72 534 203
📧 info@pameltex.com`,
        category: 'general',
        collectLead: false
    };
};

module.exports = { processMessage };
