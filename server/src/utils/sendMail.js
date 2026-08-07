import transporter from "../config/mail.js"
import { otpTemplate } from "./emailTemplate.js"


const senOTP = async (name , email , otp)=>{
    await transporter.sendMail({
        from : `"Raiz"<${process.env.EMAIL_USER}>`,
        to : email,
        subject: "veridy your email",
        html : otpTemplate(name , otp)
    })
}

export default senOTP