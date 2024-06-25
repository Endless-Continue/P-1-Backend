//JS Raiz
//Importando Path
import path from "path";

//Importando Express para crear el servidor
import express from "express";

//Importando morgan
import morgan from "morgan";

//Importando Cors
import cors from "cors";

//Importando rutas
import enrutadorProducts from "./rutas/rutaProducts.js";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";
import enrutadorRegister from "./rutas/rutaRegister.js";
//Creando el servidores de express
const servidor = express();

//Activando Cors
servidor.use(cors());

//activando morgan en el servidor
servidor.use(morgan("dev"));

//haciendo que el servidor use express.json para que lleguen los datos en json de postman
servidor.use(express.json());

//usar rutas
servidor.use("/products", enrutadorProducts);
servidor.use("/register", enrutadorRegister);
servidor.use("/users", enrutadorUsuarios);
servidor.use("/log-in", enrutadorInicioSesion);
servidor.use("/img", express.static(path.resolve("productsSrc")));

//Server Raiz
servidor.get("/", (req, res) => {
  res.status(404).send("No encontrado");
});

//exportar el servidor para index.js
export default servidor;
