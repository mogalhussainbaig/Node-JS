const user = require("../models/product_model");


const getMobiles = async (req, res) => {
    try {
        console.log(req.query);
        const page=req.query.page ?? 1;
        const limit=req.query.limit ?? 10;

        console.log("page="+page);
        console.log("limit="+limit);

        
        const limitOne=parseInt(limit);
        const skip=(page-1)*limit;

        res.json(await user.find().skip(skip).limit(limit));

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


const deleteAllData=async (req,res) => {
 try{
    const data=await user.deleteMany({});
    res.json({
      "status" : "all records deleted successfully"
    });
 }catch(ex){
    res.json({
        "error" : ex.message
      });
 }
};


module.exports = { getMobiles, addProd, findSpecificPoduct,deleteSpecificProduct,deleteAllData};