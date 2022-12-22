import { Router } from "express";
//import { CarritoFileSystem } from "../controllers/carrito/fileSystem.js";
import { DaoCarritos } from "../dao/index.js";
export const routerCarrito = Router();
//const carrito = new CarritoFileSystem("carrito.txt");
const carrito = DaoCarritos;
routerCarrito.get("/", async (req, res) => {
    try {
        const resp = await carrito.getCarritos();
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerCarrito.post("/", async (req, res) => {
    try {
        const resp = await carrito.create({});
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerCarrito.delete("/:id", async (req, res) => {
    try {
        const resp = await carrito.deleteCarrito(req.params.id);
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerCarrito.post("/:id/productos", async (req, res) => {
    try {
        const resp = await carrito.addToCarrito({ id: req.params.id, id_prod: req.body.id_prod });
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerCarrito.get("/:id/productos", async (req, res) => {
    try {
        const resp = await carrito.getProductosCarrito(req.params.id);
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerCarrito.delete("/:id/productos/:id_prod", async (req, res) => {
    try {
        const resp = await carrito.deleteFromCarrito({ id: req.params.id, id_prod: req.params.id_prod });
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
