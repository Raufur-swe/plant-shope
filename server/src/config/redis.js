import {createClient} from "redis"

const redisClient = createClient({

    url : `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
})


redisClient.on("connect",()=>{

    console.log("redis connecting...")
})
redisClient.on("ready",()=>{

    console.log("redis connect successfully")
})
redisClient.on("error",(error)=>{

    console.log("faield to connect redis\n")
    console.log(error.message)
    console.log("=========================")

})
redisClient.on("end",()=>{

    console.log("redis connection end")
})

export default redisClient