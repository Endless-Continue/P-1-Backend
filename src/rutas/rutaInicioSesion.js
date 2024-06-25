import { Router } from "express";
import ControladorInicioSesion from "../Management/controladorInicioSesion.js";

const enrutadorInicioSesion = Router();

enrutadorInicioSesion.post("/", ControladorInicioSesion.iniciarSesion);
enrutadorInicioSesion.get("/:token", ControladorInicioSesion.validarToken);

export default enrutadorInicioSesion;
