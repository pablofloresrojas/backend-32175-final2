import mongoose from "mongoose";

//crear la coleccion donde se al,acenará la información
const carritoCollection = "caritos";

//crear esquema asociado a cada documento
const carritoSchema = new mongoose.Schema({
    nombre : String,
    descripcion : String,
    codigo : String,
    fotoUrl : String,
    precio : Number,
    stock : Number
})

//crea modelo
export const CarritoModel = mongoose.model(carritoCollection,carritoSchema)