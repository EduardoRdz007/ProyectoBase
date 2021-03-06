/*jshint esversion: 8*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
let schemaOptions = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    collection: 'usuario'
};

let userSchema = new Schema({
    strNombre: {
        type: String,
        required: [true, 'Favor de insertar el nombre.']
    },
    strApellidos: {
        type: String,
        required: [true, 'Favor de insertar sus apellidos.']
    },
    nmbEdad: {
        type: Number,
        required: [true, 'Favor de insertar su edad.']
    },
    strCorreo: {
        type: String,
        required: [true, 'Favor de insertar su correo.']
    },
    strPais: {
        type: String,
        required: [true, 'Favor de insertar su pais.']
    },
    strCurp: {
        type: String,
        required: [true, 'Favor de insertar su curp.']
    },
    strDireccion: String,
    strTelefono: String,
    idObjeto: {
        type: Schema.Types.ObjectId,
        ref: 'Objeto',
    },
    blnActivo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuario', userSchema);