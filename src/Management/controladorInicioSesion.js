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
          mail: usuarioEncontrado.email,
          direccion: usuarioEncontrado.address,
        });
        respuesta.json({
          resultado: "bien",
          mensaje: "Log in Success",
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "Access denied",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an issue loging in",
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
          mensaje: "Token verified",
          datos: decodificado,
        });
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "Unknown token",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an error verifying the token",
        datos: error,
      });
    }
  },
};

export default ControladorInicioSesion;
