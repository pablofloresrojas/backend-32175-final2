import { ProductosMongo } from '../../controllers/producto/atlas.js';
export class ProductoMongo extends ProductosMongo {
    constructor(serviceAccount, url) {
        super(serviceAccount, url);
    }
}
//const instancia = new CarritoArchivo("")
export default ProductoMongo;
