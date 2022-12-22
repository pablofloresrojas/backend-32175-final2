import { ProductosFileSystem } from '../../controllers/producto/productoFileSystem.js';

export class ProductoFS extends ProductosFileSystem{
    constructor(fileName){
        super(fileName);
    }
}

//const instancia = new CarritoArchivo("")
export default ProductoFS;