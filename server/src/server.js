import app from "./app.js";
import dotenv from "dotenv/config"
import connectDb from "./config/db/db.js";

const PORT = process.env.PORT || 9000
const setServer = async()=>{
    try {
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