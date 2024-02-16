const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "ph no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    address: {
      type: String,
      required: [true, "address is required "],
    },
    specialization: {
      type: String,
      required: [true, "specilization is required "],
    },
    experience: {
      type: String,
      required: [true, "experience is required "],
    },
    feesperconsaltation: {
      type: Number,
      required: [true, "fees is required "],
    },
    status: {
      type: String,
      default: "pending",
    },
    time: {
      type: Object,
      required: [true, "Work time is required "],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;
