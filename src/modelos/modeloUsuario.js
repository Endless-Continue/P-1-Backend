import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cPassword: { type: String, required: true },
  address: { type: String },
  phoneNum: { type: String },
  country: { type: String },
  city: { type: String },
});

export default model("Usuario", esquemaUsuario);
