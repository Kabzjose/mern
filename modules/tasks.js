const {mongoose}=require("../db")
const { Schema } = mongoose

const taskSchema= new Schema({
    title:String,
    status:{type:String,
        enum:["toDo","in_progress","done"],
        default:"toDo"
    },
    owner:String,
},{timestamps:true})

const Task=mongoose.model("Task",taskSchema)

module.exports={Task}