// mealValidation.js
const { z } = require('zod');

const mealSchema = z.object({
  nom: z.string().max(255),
  description: z.string().nullable(),
  prix: z.number().min(0),
  url_image: z.string().nullable(),
  id_categorie: z.string().nullable(),
});

module.exports = mealSchema;
