const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs'); // Import the fs module
const { smtp_user, smtp_pass, smtp_host, smtp_port } = require('./config/config');

// Create a Nodemailer transporter using your email service
const transporter = nodemailer.createTransport({
    host: smtp_host,
    port:  smtp_port,
    secure: false, // Use true for port 465, false for all other ports
    auth: {
      user: smtp_user,
      pass: smtp_pass,
    },
});

const sendEmail = async (options) => {
    // Read and compile the EJS template
    const templatePath = path.join(__dirname, '../front-end/mail', options.template + '.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, options.context);
  
    // Email options
    const mailOptions = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: html
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  };
  
  module.exports = sendEmail;