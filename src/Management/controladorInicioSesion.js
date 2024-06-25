import bcryptjs from "bcryptjs";
import { generarToken, verificarToken } from "../token/funciones.js";
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorInicioSesion = {
  iniciarSesion: async (solicitud, respuesta) => {
    try {
      const { email, password } = solicitud.body;
      const usuarioEncontrado = await ModeloUsuario.findOne({
        email: email,
      });
      const contraseniaValidada = await bcryptjs.compare(
        password,
        usuarioEncontrado.password
      );
      if (contraseniaValidada) {
        const token = await generarToken({
          id: usuarioEncontrado._id,
          fNombre: usuarioEncontrado.fName,
          lNombre: usuarioEncontrado.lName,
        });
        respuesta.json({
          resultado: "bien",
          mensaje: "acceso permitido",
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "acceso denegado",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al iniciar sesión",
        datos: error,
      });
    }
  },
  validarToken: async (solicitud, respuesta) => {
    try {
      const token = solicitud.params.token;
      const decodificado = await verificarToken(token);
      if (decodificado.id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "token válido",
          datos: decodificado,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "token no válido",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al validar token",
        datos: error,
      });
    }
  },
};

export default ControladorInicioSesion;
