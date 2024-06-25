import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    product: { type: String, required: true },
    brand: { type: String, required: true },
    brandType: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    activeIngredients: { type: String },
    volume: { type: String },
    neto: { type: String },
    productAmount: { type: Number, required: true },
    productType: { type: String, required: true },
    available: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model("Products", userSchema);
