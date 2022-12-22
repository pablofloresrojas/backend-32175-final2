import mongoose from "mongoose";
import { CarritoModel } from '../../models/carrito.js';
export class CarritosMongo {
    constructor(urlDB, opciones) {
        mongoose.set('strictQuery', false);
        mongoose.connect(urlDB, opciones, error => {
            if (error) {
                console.log("error: ", error);
                return console.log("hubo un error al conectarse");
            }
            console.log("conexion exitosa");
        });
    }
    async create() {
        try {
            //create mongo atlas
            //INSERT ONE
            const carrito = await CarritoModel.create({ timestamp: Date.now(), productos: [] });
            console.log("carrito creado mongo atlas", carrito);
            return carrito;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteCarrito(id) {
        try {
            //delete firebase
            const resp = CarritoModel.findOneAndDelete({ _id: id });
            return resp;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getCarritos() {
        try {
            //getfirebase
            //READ
            const carritos = await CarritoModel.find();
            return carritos;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getProductosCarrito(id) {
        try {
            //productos carrito firebase
            const cart = await CarritoModel.findOne({ _id: id });
            return cart.productos;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async addToCarrito(data) {
        try {
            //add to carrito firebase
            const resp = await CarritoModel.findOneAndUpdate({ _id: data.id }, { $push: { productos: data.id_prod } }, { new: true });
            return resp;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteFromCarrito(data) {
        try {
            //delete from carrito firebase
            const resp = await CarritoModel.findOneAndUpdate({ _id: data.id }, { $pull: { productos: data.id_prod } }, { new: true });
            return resp;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
