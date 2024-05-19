// mealController.js
const mealSchema = require('../middlewares/validateRepas');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRepas = async (req, res) => {
  try {
    const validatedData = mealSchema.parse(req.body);
    const repas = await prisma.repas.create({
      data: validatedData,
    });
    res.status(201).json(repas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the meal' });
  }
};

module.exports = {
  createRepas,
};
