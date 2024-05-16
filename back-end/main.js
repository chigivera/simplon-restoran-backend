const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors")
const expressLayouts = require("express-ejs-layouts");
// Créer une instance de l'application Express
const app = express();

// Configurer Body-Parser pour gérer les requêtes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors)
app.use(expressLayouts)

// Configurer le moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../front-end'));

// Routes

// Route pour la page d'accueil
app.get('/', (req, res) => {
  // Passer des données à la vue si nécessaire
  res.render('home', { title: 'Home Page' });
});

// Route pour la page À propos
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Route pour la page Contact
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

