const {Schema,model}=require("mongoose");

const facultyschema= new Schema({
    fruit_id:{
        type:String, required:true
    },
    fruit_name:{
        type:String, required:true
    },
    price:{
        type:String, required:true
    }
});

const faculty = new model("Fruit",facultyschema);
module.exports=faculty;