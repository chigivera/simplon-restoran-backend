// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { jwtSecret } = require('../config/config');
// const User = require('../models/User');

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     let user = new User({ username, email, password: hashedPassword });
//     await user.save();

//     const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '1h' });
//     res.header('Authorization', `Bearer ${token}`).send({ token, user });
//   } catch (error) {
//     res.status(500).send('Internal Server Error');
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).send('Invalid email or password.');

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).send('Invalid email or password.');

//     const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '1h' });
//     res.header('Authorization', `Bearer ${token}`).send({ token, user });
//   } catch (error) {
//     res.status(500).send('Internal Server Error');
//   }
// };
