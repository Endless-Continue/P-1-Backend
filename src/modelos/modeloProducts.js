import { Schema, model } from "mongoose";

const userSchema = new Schema({
  product: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  productAmount: { type: String, required: true },
  productType: { type: String, required: true },
  colours: {
    grey: { type: Boolean, require: true },
    blue: { type: Boolean, require: true },
    red: { type: Boolean, require: true },
    black: { type: Boolean, require: true },
    white: { type: Boolean, require: true },
    purple: { type: Boolean, require: true },
    blackandwhite: { type: Boolean, require: true },
  },
  sizes: {
    xs: { type: Boolean, require: true },
    s: { type: Boolean, require: true },
    m: { type: Boolean, require: true },
    l: { type: Boolean, require: true },
    xl: { type: Boolean, require: true },
    xxl: { type: Boolean, require: true },
  },
  madeFor: {
    man: { type: Boolean, require: true },
    woman: { type: Boolean, require: true },
  },
});

export default model("Products", userSchema);
