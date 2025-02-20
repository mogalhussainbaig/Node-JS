const mongo = require("mongoose");

const shema = mongo.Schema({
    name: String,
    age: Number
});
const model = mongo.model("products", shema);
module.exports = model;