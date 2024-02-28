import { Request, Response, Router } from "express";

import { AuthMiddleware } from "../Middlewares";

import { getAllProducts, getOneProduct } from "./ProductsServices";

const router = Router();

//all route middleware
//router.use(AuthMiddleware);

router.get("/", (req:Request, res:Response) =>{
    try {
        res.send(getAllProducts());
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.get("/:id", (req:Request, res:Response) =>{
    try {
        res.send(getOneProduct(2));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.post("/",AuthMiddleware,(req:Request, res:Response) =>{
    res.send("post /");
});

router.put("/:id", (req:Request, res:Response) =>{
    res.send("put {id}");
});

router.delete("/:id", (req:Request, res:Response) =>{
    res.send("delete {id}");
});

export default router;