const controlUsuarios = {
  crearUsuario: (req, res) => {
    res.json({ usuario: "create works" });
  },
  leerUsuario: (req, res) => {
    res.json({ usuario: "get one works" });
  },
  leerUsuarios: (req, res) => {
    res.json({ usuario: "get all works" });
  },
  actualizarUsuario: (req, res) => {
    res.json({ usuario: "put works" });
  },
  eliminarUsuario: (req, res) => {
    res.json({ usuario: "delete works" });
  },
};

export default controlUsuarios;
