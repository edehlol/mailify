const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');

// tells passport that you want to authenticate users with Google
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accesToken: ' + accessToken);
      console.log('refreshToken: ' + refreshToken);
      console.log('profile' + JSON.stringify(profile));
      console.log('done' + done);
    }
  )
);
