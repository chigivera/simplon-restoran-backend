// newsletterController.js
const newsletterSchema = require('../middlewares/newsValidation');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const subscribeToNewsletter = async (req, res) => {
  try {
    const validatedData = newsletterSchema.parse(req.body);
    const subscriber = await prisma.newsletters.create({
      data: validatedData,
    });
    res.status(201).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while subscribing to the newsletter' });
  }
};

module.exports = {
  subscribeToNewsletter,
};
