import "dotenv/config";
import "./conexionDB.js";

//exportar servidor
import servidor from "./servidor.js";

//Prender servidor en la ruta 3000
servidor.listen(2444, () => {
  console.log("server runing in port 2444");
});
