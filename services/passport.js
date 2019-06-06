const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const key = require("../config/key");

passport.use(
    new GoogleStrategy(
        {
            //public
            clientID: key.googleClientID,
            clientSecret: key.googleClientSecret,
            //after user have permission, send user back to this route, this must be match the setting Authorised redirect URIs on gg
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            //accessToken: provide right to interact with customer daya
            //refresh: get new access token
        }
    )
);
