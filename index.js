"use strict";
const express = require("express");

const servidor = express();

servidor.get("/", (solicitud, respuesta) => {
  respuesta.json({
    saludo: "Hola, Buenas noches",
  });
});
servidor.get("/xxx", (solicitud, respuesta) => {
  respuesta.json({
    saludo: "saludo desde xxx",
  });
});
servidor.listen(3000);
console.log("servidor corriendo en el puerto 3000");
