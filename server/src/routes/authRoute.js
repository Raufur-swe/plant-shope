import express from "express"
import authController from "../controller/auth.controller.js"

const AuthRouter = express.Router()


AuthRouter.post("/register" , authController.register)


export default AuthRouter