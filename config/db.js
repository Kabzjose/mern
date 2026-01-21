const mongoose = require("mongoose")
require('dotenv').config();

const connectDB = async ()=>{
    try {
        //connection string
        await mongoose.connect(process.env.MONGODB_URI,{
           // useNewurlparser: true,
            //useUnifiedTopology:true,
        })
        console.log("MongoDB connected...")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports=connectDB