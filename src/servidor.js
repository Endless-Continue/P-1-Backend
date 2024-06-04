//JS Raiz

//Importando Express para crear el servidor
import express from "express";

//Importando morgan
import morgan from "morgan";

//Importando rutas
import enrutadorProducts from "./rutas/rutaProducts.js";

//Creando el servidores de express
const servidor = express();

//activando morgan en el servidor
servidor.use(morgan("dev"));

//haciendo que el servidor use express.json para que lleguen los datos en json de postman
servidor.use(express.json());

//usar rutas que vienen de rutausuarios.js
servidor.use("/products", enrutadorProducts);

//Server Raiz
servidor.get("/", (req, res) => {
  res.status(404).send("No encontrado");
});

//exportar el servidor para index.js
export default servidor;
