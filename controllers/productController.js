//Controlador de Usuario
const productModel = require("../models/Product")


/**
 * Create -> Crear una categoría
 * Read -> Leer una o más categorías
 * Update -> Actualizar una o más categorías 
 * Delete -> Eliminar una categoría
 */


/**
 * Método para crear, listar, actualizar los productos
 * @param {*} req => Todos los datos y la información que el método va a recibir (recibir)
 * @param {*} res => Todo lo que le vamos a devolver al usuario (responder)
 */

//Método create
exports.create = (req, res) =>{
    const product = new productModel({
        ProductName: req.body.ProductName,
        Price: req.body.Price,
        Quote: req.body.Quote,
        writeQuote: req.body.writeQuote,
        idProductDescription: req.body.idProductDescription
    })

    product.save().then(
        data =>{
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "Error al guardar el producto"
            })
        }
    )
} 

//Método Read
exports.findAll = (req,res)=>{
    productModel.find()
    .populate("idProductDescription") //Mostrar la relacion entre Product y ProductDescription
    .exec() //Para ejecutar lo que está en populate
    .then( 
        products =>{
            res.send(products)
        }
    ).catch(
        error =>{
            return res.status(500).send({
                message: "No se encontraron productos"
            })
        }
    )
}


//Usamos el metodo Update
exports.update=(req, res) =>{
    const product ={
        ProductName: req.body.ProductName,
        Price: req.body.Price,
        Quote: req.body.Quote
    }
    /** findByIdAndUpdate debe tener tres parametros
     * 1. A quién quiero actualizar
     * 2. Por quién lo quiero modificar
     * 3. (Opcional) indica que los datos que se van a devolver son los actualizados
     */
     productModel.findByIdAndUpdate(req.params.id, product,{new: true}/*{new: true} es opcional y sirve para poder ver los datos actualizados en postman cuando se envien (punto 3) */
     ).then( //Esta diciendo que busque por el id y que lo actualice
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
        productModel.findByIdAndRemove(req.params.id).then(
        productDeleted =>{
            res.send(productDeleted)
        }  
    ).catch(
        error =>{
            return res.status(500).send({
                message: "No se eliminó ningun producto"
            })
        }
    )
    }