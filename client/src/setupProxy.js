//configure for development only
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        //redirect to localhost5000 which server run on it
        proxy(["/api", "/auth/google"], { target: "http://localhost:5000" })
    );
};
