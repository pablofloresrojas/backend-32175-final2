import { options } from '../config/databaseConfig.js';
import admin from "firebase-admin";
import mongoose, { MongooseOptions } from "mongoose";

const serviceAccount = JSON.parse(JSON.stringify(options.firebase.key));
const url = options.firebase.urlDB;
let db:any;
let carritosCollection:any;

let DaoCarritos;
let DaoProductos;

let databaseType = "firebase"
 switch(databaseType){
    case "filesystem":
        
        const {CarritoFS}  = await import('./carritos/carritoFS.js');
        DaoCarritos = new CarritoFS(options.filesystem.fileCarritos)

        const { ProductoFS } = await import('./productos/productosFS.js');
        DaoProductos =  new ProductoFS(options.filesystem.fileProductos)
    break;

    case "firebase":
        admin.initializeApp(
            {
                credential: admin.credential.cert(serviceAccount),
                databaseURL: url, //"https://coderback1.firebase.io"
            }
        );
        console.log("base de datos conectada");
        const {CarritoFB}  = await import('./carritos/carritoFB.js');
        DaoCarritos = new CarritoFB(serviceAccount,url)

        const { ProductoFB } = await import('./productos/productosFB.js');
        DaoProductos =  new ProductoFB(serviceAccount,url)
    break;

    case "atlas":
       
        mongoose.connect(options.atlas.urlDB,
            {
                useNewUrlParser:true,
                useUnifiedTopology: true
            } as MongooseOptions,
            error=>{
                if(error) 
                    return console.log("hubo un error al conectarse");
                
                console.log("conexion exitosa")
            });
       
    break;
}

export{DaoCarritos,DaoProductos};