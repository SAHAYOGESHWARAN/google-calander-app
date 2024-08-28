module.exports = {
    googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
    googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    mongoURI: 'mongodb://localhost:27017/googleCalendarApp',
    jwtSecret: 'YOUR_JWT_SECRET',
    emailService: {
      host: 'YOUR_EMAIL_HOST',
      port: 587,
      auth: {
        user: 'YOUR_EMAIL_USER',
        pass: 'YOUR_EMAIL_PASS'
      }
    },
    smsService: {
      apiKey: 'YOUR_SMS_API_KEY',
      sender: 'YOUR_SMS_SENDER'
    }
  };
  