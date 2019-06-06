const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const key = require("../config/key");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            //public
            clientID: key.googleClientID,
            clientSecret: key.googleClientSecret,
            //after user have permission, send user back to this route, this must be match the setting Authorised redirect URIs on gg
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            //accessToken: provide right to interact with customer daya
            //refresh: get new access token
            //profile: hold all user information
            //done: finish authentication

            //check if user already sign up or not
            User.findOne({ googleId: profile.id }).then(foundUser => {
                if (foundUser) {
                    done(null, foundUser);
                } else {
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
