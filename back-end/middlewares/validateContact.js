// contactValidation.js
const { z } = require('zod');

const contactSchema = z.object({
  name: z.string().max(100),
  email: z.string().email().max(100),
  subject: z.string().max(100),
  message: z.string(),
});

module.exports = contactSchema;
