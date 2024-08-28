const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

app.use(passport.initialize());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

module.exports = app;
