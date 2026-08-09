// mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
            // await mongoose.connect('mongodb://127.0.0.1:27017/FSD-WE-B48_Mongoose')         

            // using .env
            await mongoose.connect(process.env.MONGOURL)
            console.log("MONGODB connected successfully")
    }catch(e){
        console.log("Error",e)
    }
}
// connectDB()
module.exports=connectDB