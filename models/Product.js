//Tiene relacion con ProductDescription

const moongoose = require("mongoose")//Nos ayuda a hacer un esquema

const productSchema = new moongoose.Schema({ //Creamos un nuevo esquema de moongoose
    ProductName:{type: String, require: true},//Es tipo String y es obligatorio
    Price:{type: Number, require: true},//Es tipo Number y es obligatorio
    Quote:{type: String, require: true},//Es tipo String y es obligatorio
    writeQuote:{type: String, require: false}, //Es tipo String y no es obligatorio

    //Acá vienen las relaciones
    idProductDescription: {type: moongoose.Schema.Types.ObjectId,ref:'ProductDescription'} //Vamos a relacionar los esquemas con el id, por eso usamos ObjectId, luego nos referimos a lo que exportamos en ProductDescription.
})

module.exports = moongoose.model('Product',productSchema) //Vamos a exportar un modelo de moongoose, debe tener el nombre de mi modelo y el esquema