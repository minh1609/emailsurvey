const mongoose = require("mongoose");

const RecipientSchema = require("./Recipient");
const surveySchema = new mongoose.Schema({
    title: String,
    subjecy: String,
    body: String,

    // connect subcollection and collection, pass in subcollection Schema
    recipients: [RecipientSchema],

    //Foreign Key: _user =  ObjectId, reference User
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    dateSend: Date,
    lastResponded: Date
});

mongoose.model("surveys", surveySchema);
