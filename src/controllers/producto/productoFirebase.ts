import { typeProducto } from '../../interfaces/interfaces.js';
import { instanceOf } from "../../functions/funciones.js";
import admin from "firebase-admin";

let db:any;
let productosCollection:any;
const collect="productos";
export class ProductosFirebase { 

    constructor(firebaseKey:string,urlDB:string){
        //conexion a la base de datos de firebase

        db = admin.firestore(); //instancia bd firebase
        productosCollection = db.collection(collect);
    }

    async save(producto:any){
        try {
            // esta condicion como se puede hacer de mejor forma??
            if(instanceOf<typeProducto>(producto,"nombre") &&
               instanceOf<typeProducto>(producto,"descripcion") &&
               instanceOf<typeProducto>(producto,"codigo") &&
               instanceOf<typeProducto>(producto,"fotoUrl") &&
               instanceOf<typeProducto>(producto,"precio") && 
               instanceOf<typeProducto>(producto,"stock")){
                console.log("cumple formato firebase")
            }else{
                throw new Error("Objeto no cumple con el formato requerido {nombre,descripcion,codigo,fotoUrl,precio,stock}");
            }
            //guardar en firebase

            const prod = productosCollection.doc() // guarda la instancia del documento y genera el id automaticamente
            const resp = await prod.create(producto) // se crea el documento como tal
            console.log("producto creado firebase",resp)
            return producto;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async update(producto:any){
        try {

           //firebase
           const prod = await productosCollection.doc(producto.id)
           const resp = await prod.update(producto.data);
           return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getAll(){
        try {
           //get firebase
           const snapshot = await productosCollection.get();
            //console.log(snapshot);
            const docs = snapshot.docs;
            //console.log(docs)
            const productos = docs.map(doc=>{
                return {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    descripcion: doc.data().descripcion,
                    codigo: doc.data().codigo,
                    fotoUrl: doc.data().fotoUrl,
                    precio: doc.data().precio,
                    stock: doc.data().stock,
                }
            })
            return productos;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getById(id:any){
        try {
            console.log("get by id firebase")
           //getbyid firebase
           const docRef = productosCollection.doc(id) //referencia del doc
           const doc = await docRef.get()
           console.log(doc.data())
           if(doc.exists){
            const data = {
                id:id,
                nombre:doc.data().nombre,
                descripcion: doc.data().descripcion,
                codigo: doc.data().codigo,
                fotoUrl: doc.data().fotoUrl,
                precio: doc.data().precio,
                stock: doc.data().stock,
            }
            return data
           }else{
            return "no se ha encontrado el documento"
           }
          
           
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteById(id:any){
        try {
            //delete firebase
            const docRef = productosCollection.doc(id) //referencia del doc
            const resp = await docRef.delete()
            return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}