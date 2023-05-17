const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://nomi:12345@cluster0.052clps.mongodb.net/dummy2023?retryWrites=true&w=majority").then(() => {
        console.log("Connected to MongoDB");
    }).catch((e) => {
        console.log("Oh No ERROR!");
        console.log(e);
    })
}

module.exports = connectDatabase;