const { uuid } = require('uuidv4');
const mealSchema = require('../middlewares/validateRepas');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRepas = async (req, res) => {
  try {
    const { nom, description, prix, id_categorie, id_restaurant } = req.body;
    const url_image = req.file ? `/img/repas/${req.file.filename}` : null;

    // Parse and validate input data
    const validatedData = await mealSchema.parseAsync({
      nom,
      description,
      prix: parseInt(prix),
      id_categorie,
      id_restaurant,
      url_image,
    });

    const newRepas = await prisma.repas.create({
      data: {
        id: uuid(),
        nom: validatedData.nom,
        description: validatedData.description,
        prix: validatedData.prix,
        url_image: validatedData.url_image,
        categorie: {
          connect: { id: validatedData.id_categorie },
        },
        restaurant: {
          connect: { id: validatedData.id_restaurant },
        },
      },
      include: {
        categorie: true,
        restaurant: true,
      },
    });

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const repasForm = async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    const restaurants = await prisma.restaurants.findMany();
    res.render('ajouterRepas', { categories, restaurants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createRepas,
  repasForm
};
