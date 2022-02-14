import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "Rwanda",
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other", "not-say"],
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);

export default user;
