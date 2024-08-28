const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
