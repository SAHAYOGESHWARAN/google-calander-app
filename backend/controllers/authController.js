const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

exports.generateToken = (req, res) => {
  const token = jwt.sign({ user: req.user }, keys.jwtSecret, { expiresIn: '1h' });
  res.redirect(`http://localhost:3000?token=${token}`);
};
