const mongo=require("mongoose");

const db=mongo.connect(process.env.MOGOURL,{
     useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected'));


module.exports=db;