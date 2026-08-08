import express from "express"
import authController from "../controller/auth.controller.js"
import authMiddleware from "../middleware/authMiddleware.js"

const AuthRouter = express.Router()


AuthRouter.post("/register" , authController.register)
AuthRouter.post("/otp-verification" , authController.verifyOtp)
AuthRouter.post("/login" , authMiddleware, authController.login)


export default AuthRouter