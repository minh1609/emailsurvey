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

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //Send user information
    app.get("/api/user", (req, res) => {
        //req.cookie
        res.send(req.user);
    });
};
