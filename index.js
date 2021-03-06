const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const key = require("./config/key");

require("./models/User");
require("./models/Survey");

require("./services/passport");

const app = express();
mongoose.connect(key.mongoDB, { useNewUrlParser: true });

//Middleware config
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [key.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

//Define Route
require("./routes/authRouth")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//PRODUCTION SET UP
if (process.env.NODE_ENV === "production") {
    //If route do not match express round, try to match it with React Router
    app.use(express.static("client/build"));
    const path = require("path");

    //If route is not defined, send back HTML file
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
