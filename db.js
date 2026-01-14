//connection to mongo db file

const mongoose = require("mongoose") //commonjs module-Default
require("dotenv").config()

async function  connectDB(){
    await mongoose.connect(process.env.MONGODB_URI)

    console.log("DB connected")
}



module.exports = {connectDB,mongoose}


