const { smtp_from } = require('../config/config');
const sendEmail = require('../mailer');

const contactEmail = async (req, res, next) => {
  const { nom_client, email_client, subject, message } = req.body;

  const mailOptions = {
    from: smtp_from,
    to: email_client, // Add a recipient for contact form submissions in your .env file
    subject: 'New Contact Form Submission',
    template: 'contact', // Name of the template file without extension
    context: {
      name:nom_client,
      subject,
      message
    }
  };

  try {
    await sendEmail(mailOptions);
    console.log('Contact form submission email sent successfully');
    next();
  } catch (error) {
    console.error('Error sending contact form submission email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
};

module.exports = contactEmail;
