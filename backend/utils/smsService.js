const keys = require('../config/keys');
const axios = require('axios');

exports.sendSMS = (phone, message) => {
  axios.post(`https://smsapi.yourprovider.com/send`, {
    apiKey: keys.smsService.apiKey,
    sender: keys.smsService.sender,
    to: phone,
    message: message
  }).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.error(error);
  });
};
