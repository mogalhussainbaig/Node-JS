const express = require("express");


const router = express.Router();

const {getMobiles, addProd,findSpecificPoduct,deleteSpecificProduct,deleteAllData} = require("../controllers/product_controller");

router.route("/prod").get(getMobiles);

router.route("/addProducts").post(addProd);

router.route("/specificProduct/:id").get(findSpecificPoduct);

router.route("/deleteProduct/:id").delete(deleteSpecificProduct);

router.route("/deleteAll").delete(deleteAllData);

module.exports = router;

