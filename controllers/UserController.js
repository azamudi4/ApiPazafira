/*-------------------------------------------USER-------------------------------------------------------------*/
//Controlador de UserController
const userModel = require("../models/User")//Requerimos al modelo User

/**
 * Create -> Crear una categoría
 * Read -> Leer una o más categorías
 * Update -> Actualizar una o más categorías 
 * Delete -> Eliminar una categoría
 */
/**
 * Método para crear, listar, actualizar las categorías
 * @param {*} req => Todos los datos y la información que el método va a recibir (recibir)
 * @param {*} res => Todo lo que le vamos a devolver al usuario (responder)
 */

    //Usamos el metodo Create de User
    exports.create = (req, res) =>{ //Exporta un solo método
    console.log('Que tiene el body', req.body)
    const User = new userModel({
    CompleteName: req.body.CompleteName,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    ProductName: req.body.ProductName,
    chooseQuote: req.body.chooseQuote,
    writeQuote: req.body.writeQuote
    
})
//Obteniendo la constante User y utilizando el método save de moongoose
    User.save().then(
    data =>{
        res.send(data)
    }
).catch(
    error =>{
        return res.status(500).send({
            message: error.message
        })
    }
)
}

//Usamos el metodo Read
exports.findAll = (req, res) =>{
    userModel.find().then(
        Users =>{
            res.send(Users)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "Error al leer los usuarios"
            })
        }
    )
}

//Usamos el metodo Update
exports.update=(req, res) =>{
    const User ={
        CompleteName: req.body.CompleteName,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        ProductName: req.body.ProductName,
        chooseQuote: req.body.chooseQuote,
        writeQuote: req.body.writeQuote
    }
    /** findByIdAndUpdate debe tener tres parametros
     * 1. A quién quiero actualizar
     * 2. Por quién lo quiero modificar
     * 3. (Opcional) indica que los datos que se van a devolver son los actualizados
     */
     userModel.findByIdAndUpdate(req.params.id, User,{new: true}/*{new: true} es opcional y sirve para poder ver los datos actualizados en postman cuando se envien (punto 3) */).then( //Esta diciendo que busque por el id y que lo actualice
    data=>{
        res.send(data)
    }
    ).catch(
        error => {
            return res.status(500).send({
                message:"Error al modificar"
            })
            
        }
    )

}

//Usamos el metodo delete
exports.deleteOne = (req, res)=>{
    /** findByIdAndRemove recibe un parametro
     *  1. A quién voy a eliminar
     */
     userModel.findByIdAndRemove(req.params.id).then(
        userDeleted =>{
            res.send(userDeleted)
        }  
    ).catch(
        error =>{
            return res.status(500).send({
                message: "No se eliminó ningun usuario"
            })
        }
    )
    }




