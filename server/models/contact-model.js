const {Schema,model}=require("mongoose");

const contactschema= new Schema({
    veg_id:{
        type:String, required:true
    },
    veg_name:{
        type:String, required:true
    },
    price:{
        type:String, required:true
    }
});

const Contact = new model("vegetables",contactschema);
module.exports=Contact;