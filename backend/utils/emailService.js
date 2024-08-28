const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const transporter = nodemailer.createTransport({
  host: keys.emailService.host,
  port: keys.emailService.port,
  auth: {
    user: keys.emailService.auth.user,
    pass: keys.emailService.auth.pass
  }
});

exports.sendEmail = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  });
};
