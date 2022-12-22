import mongoose from "mongoose";
//crear la coleccion donde se al,acenará la información
const productosCollection = "productos";
//crear esquema asociado a cada documento
const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    codigo: String,
    fotoUrl: String,
    precio: Number,
    stock: Number
});
//crea modelo
export const ProductoModel = mongoose.model(productosCollection, productoSchema);
