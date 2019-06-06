const express = require("express");

require("./services/passport");

const app = express();

//Define Route
require("./routes/authRouth")(app);

app.get("/", (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
