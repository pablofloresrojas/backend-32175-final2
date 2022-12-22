import {CarritoFirebase} from '../../controllers/carrito/carritoFirebase.js';

export class CarritoFB extends CarritoFirebase{
    constructor(serviceAccount,url){
        super(serviceAccount,url);
    }
}

//const instancia = new CarritoArchivo("")
export  default CarritoFB;
