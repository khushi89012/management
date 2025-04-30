const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'Email already exists' });

    const user = await User.create({ username, email, password });
    res.status(201).json({ msg: 'User registered successfully' , user});
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    // Set token in HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS in prod
        sameSite: 'Strict', // Prevent CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });
  

    res.json({ msg: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
