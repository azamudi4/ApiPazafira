module.exports = (app) =>{
    const UserController = require('../controllers/UserController') // Requerir al archivo UserController

    /**
     * Verbos del protocolo HTTP
     * POST: Se utiliza para almacenar información y trabajar con el login
     * GET: Obetener información -> por medio de la url
     * PUT: Se utiliza para modificar la información. Se envía la información por la url, respecto a quién quiero modificar.
     * DELETE: Se utiliza para eliminar la información y tambien se envía a quién queremos eliminar por la url
     */
app.post('/User/create', UserController.create) //Cuando accedamos a esa ruta, vamos al controlador UserController
app.put('/User/update/:id', UserController.update)//Esta ruta es para poder actualizar mediante el id a UserController
app.get('/User/getAll', UserController.findAll) 
app.delete('/User/deleteOne/:id', UserController.deleteOne) // Usamos la ruta para eliminar mediante el id un Usuario
}



