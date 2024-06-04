import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((dato) => {
    console.log("bien conectado a la base de dato");
  })
  .catch((error) => {
    console.log("error al conectarse");
  });
