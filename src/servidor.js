//JS Raiz

//Importando Express para crear el servidor
import express from "express";

//Importando rutas
import enrutadorUsuarios from "./rutas/rutausuarios.js";

//Creando el servidores de express
const servidor = express();

//usar rutas que vienen de rutausuarios.js
servidor.use("/usuarios", enrutadorUsuarios);

//Server Raiz
servidor.get("/", (req, res) => {
  res.status(404).send("No encontrado");
});

//exportar el servidor para index.js
export default servidor;
