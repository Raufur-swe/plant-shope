import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    // Authentication Relation
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    // Business Information
    shopName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 80,
    },

    shopLogo: {
      type: String,
      default: "",
      trim: true,
    },

    shopBanner: {
      type: String,
      default: "",
      trim: true,
    },

    shopDescription: {
      type: String,
      default: "",
      maxlength: 500,
      trim: true,
    },

    businessEmail: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    businessPhone: {
      type: String,
      default: "",
      trim: true,
    },

    businessAddress: {
      type: String,
      default: "",
      trim: true,
      maxlength: 250,
    },

    // Verification
    isVerifiedSeller: {
      type: Boolean,
      default: false,
    },

    // Dashboard Statistics
    totalPlants: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalCategories: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    completedOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    pendingOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    cancelledOrders: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalRevenue: {
      type: Number,
      default: 0,
      min: 0,
    },

    monthlyRevenue: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalCustomers: {
      type: Number,
      default: 0,
      min: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    }, 

    lastOrderAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    
  }
);

ownerSchema.index({ totalRevenue: -1 });
ownerSchema.index({ averageRating: -1 });
ownerSchema.index({ createdAt: -1 });

const ownerModel = mongoose.model("owner", ownerSchema);

export default ownerModel;