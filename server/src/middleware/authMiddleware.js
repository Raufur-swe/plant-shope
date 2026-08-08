import userModel from "../model/userModel.js";
import { verifyAccessToken } from "../utils/jwt.js";
import TryCatch from "./TryCatch.js";
import jwt from "jsonwebtoken"

const authMiddleware = TryCatch(async (req, res, next) => {
    try {
        let accessToken = null

        if (req.cookies?.accessToken) {
            accessToken = req.cookies.accessToken
        }

        if (!accessToken && req.headers.authorization?.startWith("Bearer ")) {
            accessToken = req.headers.authorization.split(" ")[1]
        }

        if (!accessToken) {
            return res.status(401).json({
                success: false,
                message: "unauthorized , access denied"
            })
        }

        const decode = await verifyAccessToken(accessToken)

        if (!decode?.id) {
            return res.status(401).json({
                success: false,
                message: "Invalid access token.",
            });
        }

        const user = await userModel.findById(decode.id).select("_id role")

        if(!user){
             return res.status(401).json({
                success: false,
                message: "User not found.",
            });
        }

        req.user = {
            id : user._id.toString(),
            role : user.role
        }

        next()
    } catch (error) {

        if(error instanceof jwt.TokenExpiredError){
            return res.status(401).json({
                success: false,
                message: "Access token expired.",
                expired: true,
            });
        }

        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                success: false,
                message: "Invalid access token.",
            });
        }

         return res.status(500).json({
            success: false,
            message: "Authentication failed.",
        });

    }
})

export default authMiddleware