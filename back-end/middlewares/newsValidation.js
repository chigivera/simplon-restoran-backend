// newsletterValidation.js
const { z } = require('zod');

const newsletterSchema = z.object({
  email: z.string().email().max(100),
});

module.exports = newsletterSchema;
