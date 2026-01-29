const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const cors=require("cors")

dotenv.config()
const app =express()


//Middleware:parse JSON
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//connectDB
connectDB()

//Routes
app.use("/Students",require("./routes/studentRoutes"))

//Default routes (home page)
app.get("/",(req,res)=>{
    res.send("API server for express js is up and running...")
})

//start server
const PORT =process.env.PORT || 4000

app.listen(PORT,()=> console.log(`Server running on http://localhost:${PORT}`))
