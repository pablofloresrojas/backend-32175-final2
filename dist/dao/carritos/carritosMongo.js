import { CarritosMongo } from '../../controllers/carrito/atlas.js';
export class CarritoMongo extends CarritosMongo {
    constructor(serviceAccount, url) {
        super(serviceAccount, url);
    }
}
//const instancia = new CarritoArchivo("")
export default CarritoMongo;
