const nodemailer = require('nodemailer');
require('dotenv').config();

// Create email transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

/**
 * Send lead notification email
 * @param {Object} lead - Lead information
 * @param {string} lead.name - Lead's name
 * @param {string} lead.email - Lead's email
 * @param {string} lead.phone - Lead's phone number
 * @param {string} lead.message - Lead's message/inquiry
 * @param {string} lead.interest - Service they're interested in
 */
const sendLeadNotification = async (lead) => {
    try {
        const mailOptions = {
            from: `"Pameltex Chatbot" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || 'info@pameltex.com',
            subject: `🔔 New Lead from Website Chatbot - ${lead.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                    <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #2c3e50; margin-bottom: 20px;">🎯 New Lead Captured</h2>
                        
                        <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                            <h3 style="color: #34495e; margin-top: 0;">Contact Information</h3>
                            <p style="margin: 8px 0;"><strong>Name:</strong> ${lead.name}</p>
                            ${lead.email ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>` : ''}
                            ${lead.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>` : ''}
                        </div>
                        
                        ${lead.interest ? `
                        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                            <h3 style="color: #856404; margin-top: 0;">Interest</h3>
                            <p style="margin: 0;">${lead.interest}</p>
                        </div>
                        ` : ''}
                        
                        ${lead.message ? `
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                            <h3 style="color: #495057; margin-top: 0;">Message/Inquiry</h3>
                            <p style="margin: 0; white-space: pre-wrap;">${lead.message}</p>
                        </div>
                        ` : ''}
                        
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                            <p style="color: #6c757d; font-size: 12px; margin: 0;">
                                This lead was captured via the Pameltex website chatbot on ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Gaborone' })} (Botswana Time)
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Lead notification email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending lead notification email:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Verify email configuration
 */
const verifyEmailConfig = async () => {
    try {
        await transporter.verify();
        console.log('✅ Email server is ready to send messages');
        return true;
    } catch (error) {
        console.error('❌ Email configuration error:', error.message);
        return false;
    }
};

module.exports = {
    sendLeadNotification,
    verifyEmailConfig
};
