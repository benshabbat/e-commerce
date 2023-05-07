import { model,Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default:50,
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Product", ProductSchema);