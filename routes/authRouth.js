const passport = require("passport");
const express = require("express");

module.exports = (app = express()) => {
    //open google login window
    app.get(
        "/auth/google",
        passport.authenticate("google", { scope: ["profile", "email"] }),
        (req, res) => {}
    );

    //handle when user is authenticaed
    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/surveys");
        }
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    //Send user information
    app.get("/api/user", (req, res) => {
        //req.cookie
        res.send(req.user);
    });
};
