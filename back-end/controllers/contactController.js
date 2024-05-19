// contactController.js
const contactSchema = require('../middlewares/validateContact');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const submitContactMessage = async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const message = await prisma.contactMessage.create({
      data: validatedData,
    });
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the message' });
  }
};

module.exports = {
  submitContactMessage,
};
