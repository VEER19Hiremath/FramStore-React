const {Schema,model}=require("mongoose");

const preferschema= new Schema({
    user_id:{
        type:String, required:true
    },
    user_name:{
        type:String, required:true
    },
    product:{
        type:String, required:true
    },
    quantity:{
        type:String, required:true
    },
});

const Prefer = new model("Order",preferschema);
module.exports=Prefer;