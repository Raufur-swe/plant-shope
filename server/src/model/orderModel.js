import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // Customer
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
      index: true,
    },

    // Seller
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "owner",
      required: true,
      index: true,
    },

    // Snapshot of shop name
    shopName: {
      type: String,
      required: true,
      trim: true,
    },

    // Ordered products
    products: [
      {
        plant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "plant",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        image: {
          type: String,
          default: "",
        },

        price: {
          type: Number,
          required: true,
          min: 0,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },

        subtotal: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    // Payment
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["cod", "bkash", "nagad", "card"],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      index: true,
    },

    transactionId: {
      type: String,
      default: "",
    },

    // Delivery
    deliveryStatus: {
      type: String,
      enum: [
        "pending",
        "delivered",
        "cancelled",
      ],
      default: "pending",
      index: true,
    },

    // Shipping Address Snapshot
    shippingAddress: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      postalCode: String,
    },

    orderNote: {
      type: String,
      default: "",
      maxlength: 300,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


orderSchema.index({ customer: 1, createdAt: -1 });
orderSchema.index({ owner: 1, createdAt: -1 });
orderSchema.index({ deliveryStatus: 1 });
orderSchema.index({ paymentStatus: 1 });

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;