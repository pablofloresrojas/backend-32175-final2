import mongoose from "mongoose";
import { ProductoModel } from '../../models/producto.js';
export class ProductosMongo {
    constructor(urlDB, opciones) {
        //conexion a la base de datos de mongo atlas
        mongoose.set('strictQuery', false);
        mongoose.connect(urlDB, opciones, error => {
            if (error) {
                console.log("error: ", error);
                return console.log("hubo un error al conectarse");
            }
            console.log("conexion exitosa");
        });
    }
    async save(producto) {
        try {
            const resp = await ProductoModel.create(producto);
            console.log("producto creado mongo atlas", resp);
            return producto;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(producto) {
        try {
            //atlas
            const resp = await ProductoModel.findOneAndUpdate({ _id: producto.id }, { $set: producto.data });
            return resp;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAll() {
        try {
            //get atlas
            const productos = await ProductoModel.find();
            return productos;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getById(id) {
        try {
            console.log("get by id firebase");
            //getbyid firebase
            const producto = ProductoModel.findOne({ _id: id });
            return producto;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteById(id) {
        try {
            //delete firebase
            const resp = await ProductoModel.findOneAndDelete({ _id: id });
            return resp;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
