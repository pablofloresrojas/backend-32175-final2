import mongoose from "mongoose";
//crear la coleccion donde se al,acenará la información
const carritoCollection = "carritos";
//crear esquema asociado a cada documento
const carritoSchema = new mongoose.Schema({
    timestamp: String,
    productos: Array
});
//crea modelo
export const CarritoModel = mongoose.model(carritoCollection, carritoSchema);
