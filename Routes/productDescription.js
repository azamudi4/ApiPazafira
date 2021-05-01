module.exports = (app) =>{
    const ProductDescriptionController = require('../controllers/ProductDescriptionController') // Requerir al archivo productDescriptionController

    /**
     * Verbos del protocolo HTTP
     * POST: Se utiliza para almacenar información y trabajar con el login
     * GET: Obetener información -> por medio de la url
     * PUT: Se utiliza para modificar la información. Se envía la información por la url, respecto a quién quiero modificar.
     * DELETE: Se utiliza para eliminar la información y tambien se envía a quién queremos eliminar por la url
     */
app.post('/ProductDescription/create', ProductDescriptionController.create) //Cuando accedamos a esa ruta, vamos al controlador ProductDescriptionController
app.put('/ProductDescription/update/:id', ProductDescriptionController.update)//Esta ruta es para poder actualizar mediante el id a ProductDescriptionController
app.get('/ProductDescription/getAll', ProductDescriptionController.findAll)//Para ver mi DB desde postman
app.delete('/ProductDescription/deleteOne/:id', ProductDescriptionController.deleteOne) 
}

