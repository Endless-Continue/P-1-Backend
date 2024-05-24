//importar el router de express
import { Router } from "express";

//importar controlusuarios.js
import controlUsuarios from "../controladores/controladorusuarios.js";

//creando el router
const enrutadorUsuarios = Router();

//creando las rutas y añadiendo control usuarios de la importacion
enrutadorUsuarios.get("/", controlUsuarios.leerUsuarios);

enrutadorUsuarios.get("/:id", controlUsuarios.leerUsuario);

enrutadorUsuarios.put("/:id", controlUsuarios.actualizarUsuario);

enrutadorUsuarios.post("/", controlUsuarios.crearUsuario);

enrutadorUsuarios.delete("/:id", controlUsuarios.eliminarUsuario);

//exportar el enrutador
export default enrutadorUsuarios;
