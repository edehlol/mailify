const passport = require('passport');

// route handlers
module.exports = (app) => {
  app.get(
    //   PATH -> path on the server (url)
    '/auth/google',
    // HANDLER -> function executed when the route is matched
    passport.authenticate('google', {
      // what info do I want to request from a user's account
      scope: ['profile', 'email'],
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
