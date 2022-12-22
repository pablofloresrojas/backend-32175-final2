import { CarritoFileSystem } from '../../controllers/carrito/carritoFileSystem.js';
export class CarritoFS extends CarritoFileSystem {
    constructor(fileName) {
        super(fileName);
    }
}
//const instancia = new CarritoArchivo("")
export default CarritoFS;
