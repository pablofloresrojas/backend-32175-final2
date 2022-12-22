import { options } from '../config/databaseConfig.js';
let DaoCarritos;
let DaoProductos;
let databaseType = "atlas";
switch (databaseType) {
    case "filesystem":
        const { CarritoFS } = await import('./carritos/carritoFS.js');
        DaoCarritos = new CarritoFS(options.filesystem.fileCarritos);
        const { ProductoFS } = await import('./productos/productosFS.js');
        DaoProductos = new ProductoFS(options.filesystem.fileProductos);
        break;
    case "firebase":
        console.log("base de datos conectada");
        const { CarritoFB } = await import('./carritos/carritoFB.js');
        DaoCarritos = new CarritoFB(JSON.parse(JSON.stringify(options.firebase.key)), options.firebase.urlDB);
        const { ProductoFB } = await import('./productos/productosFB.js');
        DaoProductos = new ProductoFB(JSON.parse(JSON.stringify(options.firebase.key)), options.firebase.urlDB);
        break;
    case "atlas":
        const { CarritoMongo } = await import('./carritos/carritosMongo.js');
        DaoCarritos = new CarritoMongo(options.atlas.urlDB, options.atlas.options);
        const { ProductoMongo } = await import('./productos/productosMongo.js');
        DaoProductos = new ProductoMongo(options.atlas.urlDB, options.atlas.options);
        break;
}
export { DaoCarritos, DaoProductos };
