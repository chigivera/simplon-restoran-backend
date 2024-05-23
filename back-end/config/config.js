require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 8000,
  smtp_host: process.env.SMTP_HOST,
  smtp_port: process.env.SMTP_PORT,
  smtp_user: process.env.SMTP_USER,
  smtp_pass:  process.env.SMTP_PASSWORD,
  smtp_from : process.env.SMTP_FROM



};
    