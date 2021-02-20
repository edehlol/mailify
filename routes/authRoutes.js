const passport = require('passport');

// route handlers
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // what info do I want to request from a user's account
      scope: ['profile', 'email'],
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));
};
