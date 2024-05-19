const { z } = require('zod');

const restaurantSchema = z.object({
  adresse: z.string().max(255),
  numero_telephone: z.string().max(20),
  email: z.string().email().max(100),
  url_facebook: z.string().url().max(255).nullable().optional(),
  url_youtube: z.string().url().max(255).nullable().optional(),
  url_twitter: z.string().url().max(255).nullable().optional(),
  url_linkedin: z.string().url().max(255).nullable().optional(),
  username: z.string().max(100),
  password: z.string().max(255),
  specialty: z.string().max(255),
});

const validateRestaurant = (req, res, next) => {
  const requestBody = req.body;

  const result = restaurantSchema.safeParse(requestBody);
  if (!result.success) {
    return res.status(400).json(result.error.errors);
  }
  next();
};

module.exports = validateRestaurant;
