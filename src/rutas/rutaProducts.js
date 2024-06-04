//importar el router de express
import { Router } from "express";

//importar controlusuarios.js
import productsManagement from "../Management/productsManagement.js";

//creando el router
const enrutadorProducts = Router();

//creando las rutas y añadiendo control usuarios de la importacion
enrutadorProducts.get("/", productsManagement.FindProducts);

enrutadorProducts.get("/:id", productsManagement.FindProduct);

enrutadorProducts.put("/:id", productsManagement.UpdateProduct);

enrutadorProducts.post("/", productsManagement.CreateProduct);

enrutadorProducts.delete("/:id", productsManagement.deleteProduct);

//exportar el enrutador
export default enrutadorProducts;
