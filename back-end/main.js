const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Import routes
const restaurantRoutes = require('./routes/restaurantRoutes');
const employeeRoutes = require('./routes/employeeRoutes')
const repasRoutes = require('./routes/repasRoutes')
const contactRoutes = require('./routes/contactRoutes');
const newsRoutes = require('./routes/newsRoutes')
const reservationRoutes = require('./routes/reservationRoutes')


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure EJS as the template engine
app.set('views', path.join(__dirname, '../front-end'));
app.use(express.static(path.join(__dirname, '../front-end')));
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Use the restaurant routes
app.use('/restaurant', express.static(path.join(__dirname, '../front-end')));
app.use('/restaurant', restaurantRoutes);
app.use('/employee', employeeRoutes);
app.use('/repas', repasRoutes);
app.use('/reservation', reservationRoutes);
app.use('/contact',contactRoutes)
app.use('/subscribe',newsRoutes)
   
// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us',layout:'layout' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Registration Page', layout: false });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
