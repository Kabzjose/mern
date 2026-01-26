const express=require("express")
const router= express.Router();
const Student= require("../model/Student")

//get all students
router.get("/", async(req,res)=>{
    try {
        const get=await Student.find()
        res.json(get)
    } catch (error) {
        res.status(500).json({message:error.message})   
    }
})

//create a student
router.post("/",async (req,res)=>{
    const { name,email,age}=req.body
   try {
     const create= new Student({name,email,age});
    const saved= await create.save();
    res.status(201).json(saved)
   } catch (error) {
    res.status(400).json({message:error.message})
   }
})

//Update student
router.put("/:id", async(req,res)=>{
    try {
        const update= await Student.findByIdAndUpdate(
            req.params.id,req.body,
            {new:true})//new updated info
    res.json(update)
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})

//Delete student
router.delete("/:id",async(req,res)=>{
    try {
        const deleted= await Student.findByIdAndDelete(req.params.id)
        res.json({message:"Student deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports=router;