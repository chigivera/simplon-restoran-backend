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
    console.log(id)
    const repasList = await prisma.repas.findMany({
      where : {
        restaurantId : id
      },
      include: {
        categorie: true,
      },
    });

    const employeeList = await prisma.employes.findMany({
      where : {
        restaurantId: id
      }
    });

    // Check if the query parameter indicates email was sent successfully
    const emailSent = req.query.emailSent === "true";
    const emailSentQueryParam = req.query.emailSent;
    const restaurant = await prisma.restaurants.findUnique({
      where: {
        id: id,
      },
    });

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.render('index', { title: 'Home Page',
    repasList,
    employeeList,
    restaurant,
    emailSent,
    emailSentQueryParam,layout:"layout" });

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
