//Modelo de usuario

const moongoose = require("mongoose")//Nos ayuda a hacer un esquema

const userSchema = new moongoose.Schema({//Crear un nuevo esquema en moongoose
    CompleteName:{type: String, require: true},//Es tipo String y es obligatorio
    Email:{type: String, require: true},//Es tipo String y es obligatorio
    PhoneNumber:{type: Number, require:true},//Es tipo Number y es obligatorio
})
module.exports = moongoose.model('User', userSchema) //Vamos a exportar un modelo de moongoose, debe tener el nombre de mi modelo y el esquema
