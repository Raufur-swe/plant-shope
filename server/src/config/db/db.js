import mongoose from "mongoose"


const connectDb = async()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName : "plant-shope"
        })
        console.log('db is connected successfully')
    } catch (error) {
        console.log("\n=====db error=====")
        console.log(error.message)
        console.log('\ndb connection loss')
        process.exit(1)
    }
}

export default connectDb