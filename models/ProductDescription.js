//Tiene relacion con Product

const moongoose = require("mongoose")//Nos ayuda a hacer un esquema

const productDescriptionSchema = new moongoose.Schema({ //Creamos un nuevo esquema de moongoose
    chooseQuote:{type: String, require: false}, //Es tipo String y no es obligatorio
    
})

module.exports = moongoose.model('ProductDescription', productDescriptionSchema ) //Vamos a exportar un modelo de moongoose, debe tener el nombre de mi modelo y el esquema