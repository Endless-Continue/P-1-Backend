import jwt from "jsonwebtoken";
/* import ModeloUsuario from "../modelos/modeloUsuario.js"; */

export function generarToken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, "llave secreta", { expiresIn: "7d" }, (error, token) => {
      if (error) {
        rechazar(error);
      } else {
        resolver(token);
      }
    });
  });
}

export function verificarToken(token) {
  return new Promise((resolver, rechazar) => {
    jwt.verify(token, "llave secreta", (error, decodificado) => {
      if (error) {
        rechazar(error);
      } else {
        resolver(decodificado);
      }
    });
  });
}

/* export function verificarEmail(){
  const { fName, lName, email, password, cPassword } = solicitud.body;
  emailFound = await ModeloUsuario.findOne({
    email: email
  })
} */
