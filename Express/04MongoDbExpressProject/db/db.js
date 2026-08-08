// mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
            // await mongoose.connect('mongodb://127.0.0.1:27017/FSD-WE-B48_Mongoose')
            await mongoose.connect('mongodb+srv://poonam:poonam@cluster0.lukkhw2.mongodb.net/FSD-WE-B48_Mongoose')
            console.log("MONGODB connected successfully from MONGOOSE")
    }catch(e){
        console.log("Error",e)
    }
}
// connectDB()
module.exports=connectDB