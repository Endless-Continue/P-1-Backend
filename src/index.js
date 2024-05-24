//exportar servidor
import servidor from "./servidor.js";

//Prender servidor en la ruta 3000
servidor.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
