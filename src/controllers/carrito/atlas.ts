import mongoose, { MongooseOptions } from "mongoose";
import { CarritoModel } from '../../models/carrito.js';

export class CarritosMongo { 

    constructor(urlDB:string, opciones:any){
      
        mongoose.set('strictQuery', false);
        mongoose.connect(urlDB, opciones as MongooseOptions,
            error=>{
                if(error) {
                    console.log("error: ",error)
                    return console.log("hubo un error al conectarse");
                }
                
                console.log("conexion exitosa")
            });
    }

    async create(){
        try {
            //create mongo atlas
            //INSERT ONE
            const carrito = await CarritoModel.create({timestamp:Date.now(),productos:[]});
            console.log("carrito creado mongo atlas",carrito)
            return carrito;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteCarrito(id:number){
        try {
           //delete firebase
           const resp = CarritoModel.findOneAndDelete({_id:id})
           return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getCarritos(){
        try {
            //getfirebase
            //READ
            const carritos = await CarritoModel.find()
            return carritos;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getProductosCarrito(id:number){
        try {
            //productos carrito firebase
            const cart:any = await CarritoModel.findOne({_id:id});
            return cart.productos
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async addToCarrito(data:any){
        try {
            //add to carrito firebase
            const resp = await CarritoModel.findOneAndUpdate({_id:data.id},{$push: { productos: data.id_prod}}, { new: true })
            return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteFromCarrito(data:any){
        try {
            //delete from carrito firebase
            const resp = await CarritoModel.findOneAndUpdate({_id:data.id},{$pull: { productos: data.id_prod}}, { new: true })
            return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}