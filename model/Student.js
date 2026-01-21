const mongoose=require("mongoose")

//defining schema {rules to follow to create collections aka tables in DB}
const studentSchema= new mongoose.Schema({
    name: {type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,unique:true,required:true}
},{timestamps:true})

//create the model (represents collections)
const Student =mongoose.model("Student",studentSchema)

module.exports=Student;