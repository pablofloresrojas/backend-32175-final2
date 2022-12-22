import mongoose from "mongoose";

//crear la coleccion donde se al,acenará la información
const productoCollection = "productos";

//crear esquema asociado a cada documento
const productoSchema = new mongoose.Schema({
    timestamp : String,
    productos : Array
})

//crea modelo
export const ProductoModel = mongoose.model(productoCollection,productoSchema)