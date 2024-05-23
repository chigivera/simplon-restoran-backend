const sendEmail = require('../mailer');

const reservationEmail = async (req, res, next) => {
  const { email_restaurant, nom_client, email_client, date_reservation, nombre_clients, demandes_speciales } = req.body;

  const mailOptions = {
    from: email_restaurant,
    to: email_client,
    subject: 'Reservation Confirmation',
    template: 'reservation', // Name of the template file without extension
    context: {
      name: nom_client,
      date: date_reservation,
      people: nombre_clients,
      specialRequests: demandes_speciales,
    }
  };

  try {
    await sendEmail(mailOptions);
    console.log('Email sent successfully');
    next();
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json(error);
  }
};

module.exports = reservationEmail;
