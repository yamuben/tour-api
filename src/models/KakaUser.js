import mongoose from "mongoose";

const kakaUserSchema = new mongoose.Schema(
  {
    amazina: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
      unique: true

    },
    yatoye: {
      type: Boolean,
      default: false,
    },
    yatowe: {
      type: Boolean,
      default: false,
    },
    recheck:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const kakaUser = mongoose.model("kakaUser", kakaUserSchema);

export default kakaUser;
