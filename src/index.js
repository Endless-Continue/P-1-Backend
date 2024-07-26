import "dotenv/config";
import "./conexionDB.js";

//exportar servidor
import servidor from "./servidor.js";

//Prender servidor en la ruta 3000
servidor.listen(3000, () => {
  console.log("server runing in port 3000");
});
