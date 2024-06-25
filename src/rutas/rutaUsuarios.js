import { Router } from "express";
import ControladorUsuarios from "../Management/controladorUsuarios.js";

const enrutadorUsuarios = Router();
enrutadorUsuarios.get("/:id", ControladorUsuarios.leerUsuario);
enrutadorUsuarios.get("/", ControladorUsuarios.leerUsuarios);
enrutadorUsuarios.put("/:id", ControladorUsuarios.actualizarUsuario);
enrutadorUsuarios.delete("/:id", ControladorUsuarios.eliminarUsuario);

export default enrutadorUsuarios;
