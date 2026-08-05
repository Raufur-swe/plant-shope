import mongoose from "mongoose";

const plantSchema = new mongoose.Schema(
  {
    // Owner
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
      index: true,
    },

    // Category created by owner
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },

    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    scientificName: {
      type: String,
      default: "",
      trim: true,
      maxlength: 120,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    // Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Inventory
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    // Images
    images: [
      {
        type: String,
      },
    ],

    // Plant Information
  
    sunlight: {
      type: String,
      enum: [
        "full_sun",
        "partial_sun",
        "shade",
        "indirect_light",
      ],
      required: true,
    },

    watering: {
      type: String,
      enum: [
        "daily",
        "every_2_days",
        "weekly",
        "biweekly",
      ],
      required: true,
    },

    height: {
      type: String,
      default: "",
    },

    // Dashboard Analytics
    soldCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

 

    totalRevenue: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Visibility
    isAvailable: {
      type: Boolean,
      default: true,
    },

   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


plantSchema.index({ owner: 1 });

plantSchema.index({ category: 1 });

plantSchema.index({ owner: 1, category: 1 });

plantSchema.index({ owner: 1, isAvailable: 1 });

plantSchema.index({ soldCount: -1 });

const plantModel = mongoose.model("plant", plantSchema);

export default plantModel;