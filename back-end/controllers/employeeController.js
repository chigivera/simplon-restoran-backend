// employeeController.js
const employeeSchema = require('../middlewares/validateEmployee');
const { uuid } = require('uuidv4');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addEmployee = async (req, res) => {
  try {
    const { nom, designation, facebook_url, instagram_url, twitter_url, id_restaurant } = req.body;
    const url_image = req.file ? `/img/repas/${req.file.filename}` : null;

    // Parse and validate input data
    const validatedData = await employeeSchema.parseAsync({
      nom,
      designation,
      url_image,
      facebook_url,
      instagram_url,
      twitter_url,
      id_restaurant,
    });
    const newEmployee = await prisma.employes.create({
      data: {
        id: uuid(),
        nom: validatedData.nom,
        designation: validatedData.designation,
        url_image: validatedData.url_image,
        facebook_url: validatedData.facebook_url,
        instagram_url: validatedData.instagram_url,
        twitter_url: validatedData.twitter_url,
        restaurant: {
          connect: { id: validatedData.id_restaurant },
        }},
    });

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the employee' });
  }
};

const employeeForm = async (req, res) => {
  try {
    const restaurants = await prisma.restaurants.findMany();
    res.render('ajouterEmployee', { restaurants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while rendering the employee form' });
  }
};

module.exports = {
  addEmployee,
  employeeForm
};
