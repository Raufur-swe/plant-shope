import jwt from "jsonwebtoken"


export  const genarateAccessToken =(payload)=>{
    return jwt.sign(payload , process.env.ACCESS_TOKEN,{

        expiresIn : "10m"
    })
    
}
export  const genarateRefreshToken =(payload)=>{
    return jwt.sign(payload , process.env.REFRESH_TOKEN,{

        expiresIn : "7d"
    })
    
}
export  const verifyRefreshToken =(token)=>{
    return jwt.verify(token , process.env.REFRESH_TOKEN)
    
}

export  const verifyAccessToken =(token)=>{
    return jwt.verify(token , process.env.ACCESS_TOKEN)
    
}

