import { Router } from "express";
import { DaoProductos } from "../dao/index.js";
export const routerProductos = Router();
//const productos = new ProductosFileSystem("productos.txt");
const productos = DaoProductos;
const isAdmin = true;
routerProductos.get("/", async (req, res) => {
    try {
        const resp = await productos.getAll();
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(error.status).json(error.message);
    }
});
routerProductos.get("/:id", async (req, res) => {
    try {
        const resp = await productos.getById(req.params.id);
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(error.status).json(error.message);
    }
});
routerProductos.post("/", (req, res, next) => {
    if (isAdmin) {
        next();
    }
    else {
        res.status(400).json({ error: -1, descripcion: `Ruta '${req.originalUrl}' método '${req.method}' no autorizada` });
    }
}, async (req, res) => {
    try {
        const resp = await productos.save(req.body);
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerProductos.put("/:id", (req, res, next) => {
    if (isAdmin) {
        next();
    }
    else {
        res.status(400).json({ error: -1, descripcion: `Ruta '${req.originalUrl}' método '${req.method}' no autorizada` });
    }
}, async (req, res) => {
    try {
        const resp = await productos.update({ id: req.params.id, data: req.body });
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
routerProductos.delete("/:id", (req, res, next) => {
    if (isAdmin) {
        next();
    }
    else {
        res.status(400).json({ error: -1, descripcion: `Ruta '${req.originalUrl}' método '${req.method}' no autorizada` });
    }
}, async (req, res) => {
    try {
        const resp = await productos.deleteById(req.params.id);
        res.status(200).json(resp);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
