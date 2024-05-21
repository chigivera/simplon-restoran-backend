const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const categorieSchema = require('../middlewares/validateCategory');

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching categories' });
  }
};

// Get a category by ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.categorie.findUnique({
      where: {
        id: id,
      },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the category' });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { nom } = categorieSchema.parse(req.body);
    
    const category = await prisma.categorie.create({
      data: {
        nom,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    console.error("An error occurred while creating the category:", error);
    res.status(500).json({ error: 'An error occurred while creating the category' });
  }
};


module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
};
