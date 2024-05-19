// const jwt = require('jsonwebtoken');
// const { jwtSecret } = require('../config/config');

// module.exports = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) return res.status(401).send('Access denied. No token provided.');

//   try {
//     const decoded = jwt.verify(token, jwtSecret);
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).send('Invalid token.');
//   }
// };
