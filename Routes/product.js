module.exports = (app)=>{ //Recibe un parametro de express, el cual es app y lo inicializamos en index
    const product = require("../controllers/productController")

    app.post('/product/create',product.create)
    app.get('/product/findAll',product.findAll)
    app.put('/product/update/:id', product.update)
    app.delete('/product/deleteOne/:id', product.deleteOne) 


}