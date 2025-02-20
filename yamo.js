require('dotenv').config();
const express = require("express");
const route = require("./routes/product_rout");
const user = require("./models/product_model");

const database = require("./database/mongo_data_base");
const PORT = 2000;

const app = express();

app.use(express.json());

app.use("/api", route);

const start = async () => {
    app.listen(PORT, (error) => {
        if (error != null) {
            console.log(error.message);
            return;
        }
        console.log('server started....')
    });
};

start();
