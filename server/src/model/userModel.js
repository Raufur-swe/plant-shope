import mongoose from "mongoose"
import bcrypt from "bcrypt"

// design schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require for registration"],
        trim: true,
        minlength: 2,
        maxlength: 60,
    },
    email: {
        type: String,
        required: [true, "email is require for registration"],
        unique: true,
        lowercase: true,
        trim: true,
         match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email",
      ],
    },
    phone: {
        type: String,
        required: [true, "phone is require for registration"],
        trim: true,
        index: true,
        unique: true,
    },
    
    password: {
        type: String,
        required: [true, " password is require for registration"],
        minlength: 8,
        select: false,
    },
    role: {
        type: String,
        enum: ["customer", "owner", "admin"],
        default: "customer",
        index: true,
    },
    
   
}, { timestamps : true })


// hash the user password
userSchema.pre("save" , async function(){
    if (!this.isModified("password")) 
        return
    this.password = await bcrypt.hash(this.password , 12)
})


// create a password compair method

userSchema.methods.compairPassword = async function (password){
    return bcrypt.compare(password , this.password)
}

// hidde password from db

userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
return user
}


const userModel = mongoose.model("user" , userSchema)

export default userModel


