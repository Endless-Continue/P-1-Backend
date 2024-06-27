import bcrypt from "bcryptjs";
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
  crearUsuario: async (solicitud, respuesta) => {
    try {
      const { fName, lName, email } = solicitud.body;
      const contra = solicitud.body.password;
      const cContra = solicitud.body.cPassword;
      if (contra == cContra) {
        const passwordProtegida = await bcrypt.hash(contra, 10);
        const cPasswordProtegida = await bcrypt.hash(cContra, 10);
        const nuevoUsuario = new ModeloUsuario({
          fName,
          lName,
          email,
          password: passwordProtegida,
          cPassword: cPasswordProtegida,
        });

        const emailFound = await ModeloUsuario.findOne({
          email: email,
        });
        if (!emailFound) {
          const usuarioCreado = await nuevoUsuario.save();
          if (usuarioCreado._id) {
            respuesta.json({
              resultado: "bien",
              mensaje: "User Created",
              datos: usuarioCreado._id,
            });
          }
        } else {
          respuesta.json({
            resultado: "mal",
            mensaje: "There's already an user with this email",
          });
        }
      } else {
        respuesta.json({
          resultdo: "mal2",
          mensaje: "The password and confirm password doesn't match",
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an error creating the user",
        datos: error,
      });
      console.log(error);
    }
  },
  leerUsuario: async (solicitud, respuesta) => {
    try {
      const usuarioEncontrado = await ModeloUsuario.findById(
        solicitud.params.id
      );
      if (usuarioEncontrado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "User Readed",
          datos: usuarioEncontrado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an issue finding the user",
        datos: error,
      });
    }
  },
  leerUsuarios: async (solicitud, respuesta) => {
    try {
      const todosLosUsuarios = await ModeloUsuario.find();
      respuesta.json({
        resultado: "bien",
        mensaje: "All users readed",
        datos: todosLosUsuarios,
      });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an issue finding all users",
        datos: error,
      });
    }
  },
  actualizarUsuario: async (solicitud, respuesta) => {
    try {
      const { fName, lName, email, address, phoneNum, country, city } =
        solicitud.body;
      const contra = solicitud.body.password;
      const cContra = solicitud.body.cPassword;
      if (contra == cContra) {
        const passwordProtegida = await bcrypt.hash(contra, 10);
        const cPasswordProtegida = await bcrypt.hash(cContra, 10);
        const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
          solicitud.params.id,
          {
            fName,
            lName,
            email,
            password: passwordProtegida,
            cPassword: cPasswordProtegida,
            address,
            phoneNum,
            country,
            city,
          }
        );
        if (usuarioActualizado._id) {
          respuesta.json({
            resultado: "bien",
            mensaje: "User updated",
            datos: usuarioActualizado._id,
          });
        } else {
          respuesta.json({
            resultado: "mal",
            mensaje: "There's an issue",
            datos: error,
          });
        }
      } else {
        respuesta.json({
          resultado: "mal",
          mensaje: "There's an issue with the credentials",
          datos: error,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an issue updating the user",
        datos: error,
      });
    }
  },
  eliminarUsuario: async (solicitud, respuesta) => {
    try {
      const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(
        solicitud.params.id
      );
      if (usuarioEliminado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "User Deleted",
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "There's an issue trying to delete the user",
        datos: error,
      });
    }
  },
};

export default ControladorUsuarios;
