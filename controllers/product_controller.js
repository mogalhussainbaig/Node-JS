const user = require("../models/product_model");


const getMobiles = async (req, res) => {
    try {
        res.json(await user.find(req.query));
        res.end();
    } catch (ex) {
        console.log(ex);
    }
};


const addProd = async (req, res) => {
    try {
        console.log(req.body);
        const data = new user(req.body);
        await data.save().then(async () => {
            res.json(await user.find());
            res.end();
            console.log('data saved')
        });
    } catch (ex) {
        console.log(ex.message);
    }

};

const findSpecificPoduct = async (req, res) => {
    try {
        const data = await user.findById(req.params.id);
        res.json(data);
    } catch (ex) {

        console.log(ex)
    }
};

const deleteSpecificProduct = async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id).then( async () => {
            res.json(await user.find());
            res.end();
        })
    } catch (ex) {
        console.log(ex);
    }
}



module.exports = { getMobiles, addProd, findSpecificPoduct,deleteSpecificProduct};