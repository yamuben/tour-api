import mongoose from "mongoose";

const votesSchema = new mongoose.Schema(
  {
    uwatoye: {
      type: mongoose.Schema.ObjectId,
      ref: "kakaUser",
    },
    uwatowe: {
      type: mongoose.Schema.ObjectId,
      ref: "kakaUser",
    }
  },
  {
    timestamps: true,
  }
);

votesSchema.pre(/^find/,function (next){
    this.populate({
      path:"uwatoye"
    }).populate({
        path:"uwatowe",
    });
    
    next();
  });

  const votes = mongoose.model("votes",votesSchema);

  export default votes;
  
