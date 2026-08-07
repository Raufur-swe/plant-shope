import nodmailer from "nodemailer"


const transporter = nodmailer.createTransport({
    service : "gmail",
    auth:{
        user : process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS
    }
})

export default transporter