import { Router } from "express";

import ControladorUsuarios from "../Management/controladorUsuarios.js";

const enrutadorRegister = Router();

enrutadorRegister.post("/", ControladorUsuarios.crearUsuario);

export default enrutadorRegister;
