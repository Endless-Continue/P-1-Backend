# P-Backend

En este proyecto de crear mi primera api, usaremos frameworks con base a JavaScript para asi poder crear un servidor local, en el cual vamos a implementar las funciones basicas de un servidor backend, las cuales son CRUD (Create, Read, Update, Delete), esto implica la creacion de rutas, controladores y modelos que nos ayudaran a llevar la creacion del API a un nivel mucho mas organizado.

## Procedimiento

- Crear repositorio en github y sincronizarlo en el local.
- Crear proyecto node en el repositorio.
- Instalar dependencias y Dev-Dependencias usando el comando `npm install` para las dependencias y `npm install name -D` para las Dev-Dependencias.
- Entrar en el archivo package.json y añadir `"type": "module"` para hacer uso de las modularizaciones en el proyecto | Tambien en el apartado de `"Scripts"` poner el comando para usar el nodemon `("dev": "nodemon (Ruta del archivo index.js)")`
- Crear carpeta src (sources), y en ella crear el archivo index.js y 2 .js mas para la conexion con el DB y las configuraciones del servidor | Tambien crear subcarpetas para el managment, modelos, y rutas del servidor junto sus .js para sus configuraciones
- Crear archivos `.env` y `.gitignore` en la carpeta raiz del repositorio
- Hacer todo tipo de pruebas y probar posibles fallos con postman para asi comprobar su correcto funcionamiento
- Corregir errores
- Proyecto Finalizado.

## Public Api

Esta es una API publica para sus database's, en caso de querer utilizarla deben hacerlo por via localhost, deberan sigan estos pasos

1. Copiar el repositorio, justo despues para que tengan los modules de node para el correcto funcionamiento del api deberan escribir en la terminal: `npm install`
2. al ya tener instalados los modules, deberan crear su propia database en mongoDB-Atlas
3. Cuando la hayan creado deben poner en `./src/conexionDB.js` en el apartado de connect su link de conexion con mongoDB, con su contraseña y asi ya estarian conectados a su MongoDB
4. Inicia el servidor con el comando `npm run dev`, si todo esta correcto el servidor deberia estar en `http://localhost:2444`, la pagina raiz esta deshabilitada, para poder conseguir la informacion ver `Endpoints`.

## Endpoints

Para usar la api para sus database's, deberan usarla de esta manera

- `POST /products`: Crear producto.
- `GET /products/:id`: Obten informacion de un producto por su id.
- `GET /products`: Obtener informacion de todos los productos de la database.
- `PUT /products/:id`: Actualizar un producto.
- `DELETE /products/:id`: Elimina un producto.

## DataBase

La base de datos utilizada es:

- Mongodb

## Dependencias

- Express
- Node.js
- Mongoose
- Dotenv

## Dev-Dependencias

- Nodemon
- Morgan

## Devs:

_Endless-Continue_

Email: javiertorresarrieta01@gmail.com
