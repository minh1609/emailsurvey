const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const key = require("./config/key");

require("./models/User");
require("./services/passport");

const app = express();
mongoose.connect(key.mongoDB, { useNewUrlParser: true });

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [key.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Define Route
require("./routes/authRouth")(app);

app.get("/", (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
