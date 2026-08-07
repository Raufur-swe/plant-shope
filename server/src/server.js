import dotenv from "dotenv/config"
import app from "./app.js";
import connectDb from "./config/db/db.js";
import redisClient from "./config/redis.js";

const PORT = process.env.PORT || 9000
const setServer = async()=>{
   
    try {
        await redisClient.connect()
        
        await connectDb()
        app.listen(PORT ,()=>{
            console.log(`Server is running at port : ${PORT}`)
        })
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}


setServer()