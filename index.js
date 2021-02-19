const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// tells passport that you want to authenticate users with Google
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
