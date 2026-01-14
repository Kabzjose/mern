const {mongoose,connectDB}=require("./db")
const {User}=require("./modules/users")
const {Task}=require("./modules/tasks")

async function main(){
    await connectDB()

    //create
   const create= await User.create({
        name:"John wachira",email:"john@gmail.com"
    })
   console.log("Created User:",create);
   

    //read
    const users= await User.find().select("name email")
    console.log("All users:",users);

    //update
    await User.updateOne({email:"john@gmail.com"},{role:"admin"})
    console.log("Updated User:",updatedUser);

    //delete
    await User.deleteOne({email:"john@gmail.com"})
    console.log("Deleted User")
}


main()
