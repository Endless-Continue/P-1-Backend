const controlUsuarios = {
  crearUsuario: async (req, res) => {
    try {
      console.log("solicitud: ", req.body);
      if (req.body.name === "")
        throw new Error("you didn't write down your name");
      if (req.body.lastName === "")
        throw new Error("you didn't write down your lastName");
      if (req.body.username === "")
        throw new Error("you didn't write down your username");
      if (req.body.mail === "")
        throw new Error("you didn't write down your mail");
      if (req.body.tel === "")
        throw new Error("you didn't write down your phone number");
      if (req.body.password === "")
        throw new Error("you didn't write down a password");
      if (req.body.confirmPassword === "")
        throw new Error("you didn't write down again your password");
      if (req.body.country === "")
        throw new Error("you didn't write down your country");
      if (req.body.city === "")
        throw new Error("you didn't write down your city");
      if (req.body.zipCode === "")
        throw new Error("you didn't write down your zipcode");
      if (req.body.photo === "") throw new Error("you didn't put your photo");
      if (req.body.address === "")
        throw new Error("you didn't write down your address");
      res.json({ usuario: "te haz registrado" });
    } catch (error) {
      console.log("error: ", error);
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up",
      });
    }
  },
  leerUsuario: async (req, res) => {
    try {
      console.log(req.params.id);
      res.json({ usuario: "get one user works" });
    } catch (error) {
      console.log("error: ", error);
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up",
      });
    }
  },
  leerUsuarios: async (req, res) => {
    try {
      res.json({ usuario: "get all user works" });
    } catch (error) {
      console.log("error: ", error);
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up",
      });
    }
  },
  actualizarUsuario: async (req, res) => {
    try {
      if (req.body.name === "") throw new Error("you can't have a emptyname");
      if (req.body.lastName === "")
        throw new Error("you can't have a empty lastName");
      if (req.body.username === "")
        throw new Error("you can't have a empty username");
      if (req.body.mail === "") throw new Error("you can't have a empty mail");
      if (req.body.tel === "")
        throw new Error("you can't have a empty phone number");
      if (req.body.password === "")
        throw new Error("you can't have a empty password");
      if (req.body.confirmPassword === "")
        throw new Error("you can't have a empty password");
      if (req.body.country === "")
        throw new Error("you can't have a empty country");
      if (req.body.city === "") throw new Error("you can't have a empty city");
      if (req.body.zipCode === "")
        throw new Error("you can't have a empty zipcode");
      if (req.body.photo === "")
        throw new Error("you can't have a empty photo");
      if (req.body.address === "")
        throw new Error("you can't have a empty address");
      console.log("id: ", req.params.id);
      console.log("res: ", req.body);
      res.json({
        mensaje: "update works",
      });
    } catch (error) {
      console.log("error: ", error);
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up",
      });
    }
  },
  eliminarUsuario: async (req, res) => {
    try {
      console.log("id: ", req.params.id);
      res.json({
        mensaje: "user deleted",
      });
    } catch (error) {
      console.log("error: ", error);
      res.json({
        error: true,
        mensaje: "error , there's an issue in the sign up",
      });
    }
  },
};

export default controlUsuarios;
/*
 "name": "Javier",
  "lastName": "Torres",
  "username": "negro",
  "mail": "asd@asd.asd",
  "tel": "3044998259",
  "password": "asd",
  "confirmPassword": "asd",
  "country": "colombia",
  "city": "barraquilla",
  "zipCode": "080015",
  "photo": "img",
  "address": "calle 120"
*/
