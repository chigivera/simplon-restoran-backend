const { z } = require('zod');

const categorieSchema = z.object({
  nom: z.string().min(1).max(100),
});

module.exports = categorieSchema;
