import mongoose, { Schema } from "mongoose";

const customerSchema = new mongoose.Schema({
    user :{
        type : Schema.Types.ObjectId,
        ref : "user",
        require : true ,
        unique : true ,    // on customer profile per user
    },

    profileImage :{
        type : String ,
        default : "",
        trim : true,

    },

       gender: {
      type: String,
      enum: ["male", "female", "other", ""],
      default: "",
    },

    dateOfBirth: {
      type: Date,
      default: null,
    },

    address:{
        type : String , 
        default : null
    },

  totalSpent: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    successfulOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    cancelledOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

},{timestamps : true})


const customerModel = mongoose.model("customer" , customerSchema)

export default customerModel