const express = require("express");

const key = require("../config/key");
const stripe = require("stripe")(key.stripeSecretKey);

const requireLogin = require("../middlewares/requireLogin");

module.exports = (app = express()) => {
    app.post("/api/stripe", requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            description: "for credit",
            source: req.body.id
        });
        console.log(charge);
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};
