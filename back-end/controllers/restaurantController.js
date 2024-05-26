const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRestaurant = async (req, res) => {
  try {
    const {
      adresse,
      numero_telephone,
      email,
      url_facebook ,
      url_youtube ,
      url_twitter ,
      url_linkedin ,
      nom,
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
        nom,
        specialty,
      },
    });

    return res.status(201).json(newRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
const getRestaurants = async (req, res) => {
  try {
    const { id } = req.query;

    let repasList, employeeList, restaurant;

    if (id) {
      repasList = await prisma.repas.findMany({
        where: {
          id_restaurant: id
        },
        include: {
          categorie: true,
        },
      });

      employeeList = await prisma.employes.findMany({
        where: {
          restaurantId: id
        }
      });

      restaurant = await prisma.restaurants.findUnique({
        where: {
          id: id,
        },
      });
    }

    // Check if the query parameter indicates email was sent successfully
    const emailSent = req.query.emailSent === "true";
    const emailSentQueryParam = req.query.emailSent;
    const restaurants = await prisma.restaurants.findMany();

    if (!restaurants || restaurants.length === 0) {
      return res.status(404).json({ error: 'No restaurants found' });
    }

    res.render('index', {
      title: 'Home Page',
      repasList: repasList || undefined,
      employeeList: employeeList || undefined,
      restaurants,
      restaurant: restaurant || undefined,
      emailSent,
      emailSentQueryParam,
      layout: "layout"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createRestaurant,
  getRestaurants
};
