import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    category: String,
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema);