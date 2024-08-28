const Event = require('../models/Event');
const emailService = require('../utils/emailService');
const smsService = require('../utils/smsService');

exports.addEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();

    // Send Email
    emailService.sendEmail({
      to: req.body.email,
      subject: 'Event Added',
      text: `Your event "${req.body.title}" has been added successfully.`
    });

    // Send SMS
    smsService.sendSMS(req.body.phone, `Your event "${req.body.title}" has been added successfully.`);

    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
