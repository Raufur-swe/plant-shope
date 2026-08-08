import dotenv from "dotenv/config"
import app from "./app.js";
import connectDb from "./config/db/db.js";
import redisClient from "./config/redis.js";

const PORT = process.env.PORT || 9000
const setServer = async()=>{
    console.time("server start up ")
   
    try {
        console.time("redis")
        await redisClient.connect()
        console.timeEnd("redis")
        
        console.time("db")
        await connectDb()
        console.timeEnd("db")

        console.time("server")
        app.listen(PORT ,()=>{
            console.log(`Server is running at port : ${PORT}`)
        })
         console.timeEnd("server")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}


setServer()