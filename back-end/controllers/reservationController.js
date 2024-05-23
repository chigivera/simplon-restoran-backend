// reservationController.js
const reservationSchema = require('../middlewares/validationReservation');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReservation = async (req, res) => {
  try {
    const date_reservation = new Date(req.body.date_reservation)
    const validatedData = reservationSchema.parse({...req.body,nombre_clients: parseInt(req.body.nombre_clients),date_reservation:date_reservation.toISOString()});
    console.log(validatedData)
    const reservation = await prisma.reservation.create({
      data: validatedData,
    });
    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the reservation' });
  }
};

module.exports = {
  createReservation,
};
