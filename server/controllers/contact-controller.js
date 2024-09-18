const contact= require("../models/contact-model");



const contactForm = async(req,res)=>{
try {
    const response=req.body;
    await contact.create(response);
    return res.status(200).json({msg:"vegetables added successfully"});

} catch (error) {
    return res.status(200).json({msg:"vegetables failed to add"});    
}
};
module.exports=contactForm;