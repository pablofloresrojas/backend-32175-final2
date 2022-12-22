import fs from "fs";
import path from "path";
const __dirname = path.resolve() + "/src/data/";
import { getMaxId } from "../../functions/funciones.js";
import { ProductosFileSystem } from "../producto/productoFileSystem.js";
const productos = new ProductosFileSystem("productos.txt");
export class CarritoFileSystem {
    filename;
    constructor(filename) {
        this.filename = filename;
    }
    async create(carrito) {
        try {
            if (fs.existsSync(path.join(__dirname) + this.filename)) {
                const carritos = await this.getCarritos();
                carrito.id = 1;
                if (carritos.length > 0) {
                    const idx = getMaxId(carritos);
                    carrito.id = idx;
                }
                carrito.timestamp = Date.now();
                carrito.productos = [];
                carritos.push(carrito);
                await fs.promises.writeFile(path.join(__dirname) + this.filename, JSON.stringify(carritos, null, 2));
            }
            else {
                carrito.id = 1;
                carrito.timestamp = Date.now();
                carrito.productos = [];
                await fs.promises.writeFile(path.join(__dirname) + this.filename, JSON.stringify([carrito], null, 2));
            }
            return carrito;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteCarrito(id) {
        try {
            const contenido = await fs.promises.readFile(path.join(__dirname) + this.filename, "utf-8");
            if (contenido.length > 0) {
                //buscar carrito por id dentro de contenido
                const carritos = (JSON.parse(contenido)).filter(carro => carro.id !== id);
                await fs.promises.writeFile(path.join(__dirname) + this.filename, JSON.stringify(carritos, null, 2));
                return `Carrido ID=${id} ha sido eliminado de la base de datos`;
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getCarritos() {
        try {
            const contenido = await fs.promises.readFile(path.join(__dirname) + this.filename, "utf-8");
            if (contenido.length > 0) {
                //buscar carrito por id dentro de contenido
                const carritos = JSON.parse(contenido);
                return carritos;
            }
            else {
                return [];
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getProductosCarrito(id) {
        try {
            let carritos = [];
            const contenido = await fs.promises.readFile(path.join(__dirname) + this.filename, "utf-8");
            if (contenido.length > 0) {
                carritos = JSON.parse(contenido);
            }
            const idx = carritos.findIndex((e) => e.id === id);
            if (idx === -1) {
                throw new Error(`El carrito ID=${id} no se encuentra en la base de datos.`);
            }
            let prods = [];
            await Promise.all(carritos[idx].productos.map(async (idProd) => {
                try {
                    const prod = await productos.getById(idProd); //.then(r=>r.data).catch(error=>{console.log("errooooor",error)})
                    console.log(`producto para agregar (${idProd}): `, prod);
                    prods.push(prod);
                    return prod;
                }
                catch (error) {
                    console.log("errooooooorrrr:", error);
                    throw new Error(error.message);
                }
            })).then(data => {
                console.log("entrando en then para asignar prods: ", data);
                prods = data;
            });
            console.log("prods: ", prods);
            return prods;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async addToCarrito(data) {
        try {
            let carritos = [];
            const contenido = await fs.promises.readFile(path.join(__dirname) + this.filename, "utf-8");
            if (contenido.length > 0) {
                carritos = JSON.parse(contenido);
            }
            const idx = carritos.findIndex((e) => e.id === parseInt(data.id));
            if (idx === -1) {
                throw new Error(`El carrito ID=${data.id} no se encuentra en la base de datos.`);
            }
            carritos[idx].productos.push(data.id_prod);
            await fs.promises.writeFile(path.join(__dirname) + this.filename, JSON.stringify(carritos, null, 2));
            return `El producto ID=${data.id_prod} ha sido agregado al carrito id=${data.id}`;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteFromCarrito(data) {
        try {
            let carritos = [];
            const contenido = await fs.promises.readFile(path.join(__dirname) + this.filename, "utf-8");
            if (contenido.length > 0) {
                carritos = JSON.parse(contenido);
            }
            const idx = carritos.findIndex((e) => e.id === parseInt(data.id));
            if (idx === -1) {
                throw new Error(`El carrito ID=${data.id} no se encuentra en la base de datos.`);
            }
            carritos[idx].productos = carritos[idx].productos.filter((elemento) => elemento !== parseInt(data.id_prod));
            await fs.promises.writeFile(path.join(__dirname) + this.filename, JSON.stringify(carritos, null, 2));
            return `Producto ID=${data.id_prod} ha sido eliminado del carrito`;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
