const { smtp_from } = require('../config/config');
const sendEmail = require('../mailer');

const newsletterEmail = async (req, res, next) => {
  const { email_client } = req.body;

  const mailOptions = {
    from: smtp_from,
    to: email_client,
    subject: 'Newsletter Subscription Confirmation',
    template: 'newsletter', // Name of the template file without extension
    context: {
      // Add any additional context if needed
    }
  };

  try {
    await sendEmail(mailOptions);
    console.log('Newsletter confirmation email sent successfully');
    next();
  } catch (error) {
    console.error('Error sending newsletter confirmation email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
};

module.exports = newsletterEmail;
