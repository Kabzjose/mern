const {mongoose,connectDB}=require("./db")
const {User}=require("./modules/users")
const {Task}=require("./modules/tasks")


async function main(){
    await connectDB();   //wait for database connection

    await User.deleteMany({});//deletes any content in users if it exists
    await Task.deleteMany({});//deletes any content in Task if it exists
 
    const users = await User.insertMany([
        {name:"Aice Kariuki",email:"alice@gmail.com",role:"admin"},
        {name:"James kibe",email:"james@gmail.com",role:"user"},
        {name:"Joy Migwi",email:"joy@gmail.com",role:"user"},
        {name:"Emmaculate",email:"emma@gmail.com"}
    ]);

    await Task.insertMany([
          {title:"Write proposal,",status:"toDo",owner:"Alice"},
          {title:"design schema",status:"in_progress",owner:"James"},
          {title:"Develop API",status:"toDo",owner:"Joy"},
          {title:"Test application",status:"done",owner:"Emma"}
    ]);
    console.log("Data populated")
    await mongoose.disconnect()
}
main()