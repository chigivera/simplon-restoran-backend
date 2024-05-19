require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 8000,
};
    