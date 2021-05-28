
/*------------------------------------------------ProductDescription-----------------------------------------*/

    //Controlador de ProductDescriptionController

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


//Usamos el metodo Create
exports.create = (req, res) =>{ //Exporta un solo método
    console.log('Que tiene el body', req.body)
    const productDescription = new userModel({
    chooseQuote: req.body.chooseQuote,
    writeQuote: req.body.writeQuote
})

    //Obteniendo la constante productDescription y utilizando el método save de moongoose
    productDescription.save().then(
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
        productodescriptions =>{
            res.send(productodescriptions)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "Error al leer la descripción de productos"
            })
        }
    )
}

//Usamos el metodo Update
exports.update=(req, res) =>{
    const productDescription ={
        chooseQuote: req.body.chooseQuote,
        writeQuote: req.body.writeQuote
    }
    /** findByIdAndUpdate debe tener tres parametros
     * 1. A quién quiero actualizar
     * 2. Por quién lo quiero modificar
     * 3. (Opcional) indica que los datos que se van a devolver son los actualizados
     */
     userModel.findByIdAndUpdate(req.params.id, productDescription,{new: true}/*{new: true} es opcional y sirve para poder ver los datos actualizados en postman cuando se envien (punto 3) */).then( //Esta diciendo que busque por el id y que lo actualice
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
        productDescriptionDeleted =>{
            res.send(productDescriptionDeleted)
        }  
    ).catch(
        error =>{
            return res.status(500).send({
                message: "No se eliminó ninguna descripción de producto"
            })
        }
    )
    }