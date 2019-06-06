const passport = require("passport");

module.exports = app => {
    //open google login window
    app.get(
        "/auth/google",
        passport.authenticate("google", { scope: ["profile", "email"] }),
        (req, res) => {}
    );

    //handl when user is authenticaed
    app.get("/auth/google/callback", passport.authenticate("google"));
};
