// contactController.js
const contactSchema = require('../middlewares/validateContact');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const submitContactMessage = async (req, res) => {
  try {
    const {nom_client,email_client,subject,message } = req.body
    const validatedData = contactSchema.parse({name:nom_client,email:email_client,subject,message});
    const contact = await prisma.contact.create({
      data: validatedData,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the message' });
  }
};

module.exports = {
  submitContactMessage,
};
