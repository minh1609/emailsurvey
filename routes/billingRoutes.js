const express = require("express");

const key = require("../config/key");

const stripe = require("stripe")(key.stripeSecretKey);

module.exports = (app = express()) => {
    app.post("/api/stripe", async (req, res) => {
        const charge = await stripe.charge.create({
            amount: 500,
            currency: "usd",
            description: "for credit",
            source: req.body.id
        });
        console.log(charge);
        req.user.credit += 5;
        const user = await req.user.save();
        res.send(user);
    });
};
