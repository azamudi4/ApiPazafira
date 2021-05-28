//Este es el inicio que recibe todos

const express = require('express') //Requerimos y Usamos express en nuestro proyecto
const bodyParser = require ('body-parser')//Requerimos lo que hemos instalado (body-parser)
const{conecToDB} = require("./db") // Estamos requiriendo lo que exportamos en db.js
// const cors = require ('cors')

const app = express() //Convertimos a express en un objeto para utilizar todas la herramientas que tiene

/*app.use(cors())*/
app.use(bodyParser.json())
conecToDB()

// require('./Routes/productDescription')(app) //Se está cargando el archivo de rutas de descripcion del producto y se envía una variable llamada app
// require('./Routes/product')(app) //Se está cargando el archivo de rutas de los productos y se envía una variable llamada app
require('./Routes/user')(app) //Se está cargando el archivo de rutas de usuario y se envía una variable llamada app
const port = process.env.PORT || 3000

app.listen(port, ()=>{ //elemntos: al puerto al cual me voy a conectar y una función que voy a ejecutar al momento que me conecte al puerto
    console.log('¡Nos conectamos!') // cuando se conecta a este puerto, nos aparece este mensaje
}) // el puerto 3000 casí siempre esta libre, por eso lo usamos

