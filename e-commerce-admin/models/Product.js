import mongoose from "mongoose";
const { Schema, SchemaTypes, models } = mongoose;

const ProductSchema = new mongoose.Schema(
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
      required: true,
    },
  },
  { timestamps: true }
);
export default models.Product || mongoose.model("Product", ProductSchema);
