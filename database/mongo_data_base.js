const mongo=require("mongoose");

const db=mongo.connect(process.env.MOGOURL).then(() => console.log('db connected'));


module.exports=db;