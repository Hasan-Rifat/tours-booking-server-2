const mongoose = require("mongoose");

const toursSchema = mongoose.Schema(
  {
    name: {
      required: [true, "please provide a tour name"],
      type: String,
      trim: true,
      unique: true,
      minLength: [3, "name must be 3 characters"],
      maxLength: [100, "name is to long"],
    },
    description: {
      required: true,
      type: String,
    },
    image: {
      required: [true, "image is required"],
      type: String,
    },
    price: {
      required: [true, "price is required"],
      type: Number,
      minLength: [0, "price cannot be negative"],
    },
    duration: {
      type: Number,
      required: [true, "duration is required"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not integer value",
      },
    },
    status: {
      type: String,
      required: [true, "status is required"],
      enum: {
        values: ["available", "unavailable"],
      },
    },
  },
  { timestamps: true }
);

const Tours = mongoose.model("tours", toursSchema);

module.exports = Tours;
