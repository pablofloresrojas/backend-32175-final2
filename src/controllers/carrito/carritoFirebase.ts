import admin from "firebase-admin";

let db:any;
let carritosCollection:any;
const collect="carritos";

export class CarritoFirebase { 

    constructor(firebaseKey:string,urlDB:string){
      
        db = admin.firestore(); //instancia bd firebase

        carritosCollection = db.collection(collect);
    }

    async create(){
        try {
            //create firebase
            //INSERT ONE
            const doc = carritosCollection.doc() // guarda la instancia del documento y genera el id automaticamente
            await doc.create({timestamp:Date.now(),productos:[]}) // se crea el documento como tal
            console.log("carrito creado firebase")
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteCarrito(id:number){
        try {
           //delete firebase
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getCarritos(){
        try {
            //getfirebase
            //READ
            const snapshot = await carritosCollection.get();
            //console.log(snapshot);
            const docs = snapshot.docs;
            console.log(docs)
            const carritos = docs.map(doc=>{
                return {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    dni: doc.data().dni
                }
            })
            return carritos;
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async getProductosCarrito(id:number){
        try {
            //productos carrito firebase
            const cart = await carritosCollection.doc(id).get()
            return cart.data().productos
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async addToCarrito(data:any){
        try {
            //add to carrito firebase
            const cart = await carritosCollection.doc(data.id)
            const resp = await cart.update({
                productos: admin.firestore.FieldValue.arrayUnion(data.id_prod)
            });
            return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteFromCarrito(data:any){
        try {
            //delete from carrito firebase
            const cart = await carritosCollection.doc(data.id)
            const resp = await cart.update({
                productos: admin.firestore.FieldValue.arrayRemove(data.id_prod)
            });
            return resp
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}