// employeeValidation.js
const { z } = require('zod');

const employeeSchema = z.object({
  nom: z.string().max(255),
  designation: z.string().max(100).nullable(),
  url_image: z.string().max(255).nullable(),
  facebook_url: z.string().max(255).nullable(),
  instagram_url: z.string().max(255).nullable(),
  twitter_url: z.string().max(255).nullable(),
  id_restaurant: z.string().nullable(),
});

module.exports = employeeSchema;
