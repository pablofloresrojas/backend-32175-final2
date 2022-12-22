import { ProductosFirebase } from '../../controllers/producto/productoFirebase.js';

export class ProductoFB extends ProductosFirebase{
    constructor(serviceAccount,url){
        super(serviceAccount,url);
    }
}

//const instancia = new CarritoArchivo("")
export  default ProductoFB;
