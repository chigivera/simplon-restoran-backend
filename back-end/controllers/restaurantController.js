const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRestaurant = async (req, res) => {
  try {
    const {
      adresse,
      numero_telephone,
      email,
      url_facebook = "",
      url_youtube = "",
      url_twitter = "",
      url_linkedin = "",
      username,
      password,
      specialty
    } = req.body;

    const newRestaurant = await prisma.restaurants.create({
      data: {
        adresse,
        numero_telephone,
        email,
        url_facebook,
        url_youtube,
        url_twitter,
        url_linkedin,
        username,
        password,
        specialty,
      },
    });

    return res.status(201).json(newRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: id,
      },
    });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.render('index', { title: 'Home Page',restaurant:restaurant,layout:"layout" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getRestaurants = async (req, res) => {
  try {
    const restaurant = await prisma.restaurants.findMany();

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  createRestaurant,
  getRestaurantById,
  getRestaurants
};
