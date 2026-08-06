import redisClient from "../config/redis.js";
import TryCatch from "../middleware/TryCatch";
import userModel from "../model/userModel.js";
import crypto from "crypto"

const authController = {
    // register

    register: TryCatch(async (req, res) => {

        
            let { name, email, phone, password, role } = req.body


            // normalize inputes

            name = name?.trim()
            email = email?.trim().toLowerCase()
            phone = phone?.trim()
            password = password?.trim()
            role = role?.trim().toLowerCase()

            if (!name || !email || !phone || !password || !role) {
                return res.status(400).json({
                    success: false,
                    message: "all field are required"
                })
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    success: false,
                    message: "invalid email !"
                })
            }
            const phoneRegex = /^(?:\+88|01)?\d{11}$/
             if (!phoneRegex.test(phone)) {
                return res.status(400).json({
                    success: false,
                    message: "invalid number !"
                })
            }

            if (password.length < 8) {
                return res.status(400).json({
                    success: false,
                    message: "password must be 8 charecter or more"
                })
            }

            if (!["customer", "owner"].includes(role)) {
                return res.status(403).json({
                    success: false,
                    message: "inavlid role"
                })
            }

                // if a otp already send and its not expires then show a error message

            const pendingRegistration = await redisClient.exists(`register:${email}`)
            if (pendingRegistration) {
                return res.status(429).json({
                    success: false,
                    message: "OTP already sent. Please wait until it expires.",
                });
            }


            // find existing user
            const existingUser = await userModel.findOne({
    $or: [{ email }, { phone }],
});

if (existingUser) {
    if (existingUser.email === email) {
        return res.status(409).json({
            success: false,
            message: "Email already exists.",
        });
    }

    if (existingUser.phone === phone) {
        return res.status(409).json({
            success: false,
            message: "Phone number already exists.",
        });
    }
}

        


            // genarate otp 

            const otp = crypto.randomInt(100000, 999999).toString()
            const hashOtp = crypto.createHash("sha256").update(otp).digest("hex")

            // set on redis before varification

            await redisClient.set(`register:${email}`, JSON.stringify({
                name, email, phone, password, hashOtp, role
            }), { EX: 300 })

            return res.status(200).json({
                 success: true,
                message: "OTP sent successfully.",
            })

        
    })
}

export default authController