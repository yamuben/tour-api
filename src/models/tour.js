import mongoose from "mongoose";
const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  seats: Number,
  available: Number,
  images: [
    {
      type: String,
    },
  ],
  description: String,
  dateScheduled: Date,
  dueDate: Date,
  phone: String,
  price: Number,
  tripDescription: String,
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
