// Aquí nos conectamos a la DB
const config = require("./config")
const moongoose = require('mongoose')//Vamos a utilizar la libreria moongoose

const conecToDB = () =>{
    moongoose.connect("mongodb+srv://Pazafira:C3r02240@cluster0.46rcf.mongodb.net/Pazafira?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true},(error)=>{
        if (error) {
            console.log("Tenemos un error", error)
        } else {
            console.log("Nos conectamos a la DB")
        }
    })//Nos vamos a conectar a mongo
}

module.exports={conecToDB} //Exportamos el modulo para que requiramos esta parte de conexión cuando la necesitemos.