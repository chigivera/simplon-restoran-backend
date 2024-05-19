// reservationValidation.js
const { z } = require('zod');

const reservationSchema = z.object({
  nom_client: z.string().max(100),
  email_client: z.string().email().max(100),
  date_reservation: z.date(),
  nombre_clients: z.number().int(),
  demandes_speciales: z.string().nullable(),
});

module.exports = reservationSchema;
