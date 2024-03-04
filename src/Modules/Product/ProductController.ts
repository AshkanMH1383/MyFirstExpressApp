// Import Libs
import { NextFunction, Request, Response, Router } from "express";

// Import Middlewares
import { AuthMiddleware } from "@src/Middlewares";

// Import Services
import { getAllProducts, getOneProduct ,createNewProduct,deleteProduct,updateProduct } from "./ProductServices";
import CreateProductDto from "./Dtos/CreateProductDto";
import RequestWithUser from "@src/Types/RequestWithUser";
import Logger from "@src/Helper/Logger";

// Create Route
const router = Router();


// Routes
router.get("/", async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (err :any) {
        next(err)
    }
});

router.get("/:id", async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const product = await getOneProduct(req.params.id);
        res.status(200).json(product);
    } catch (err :any) {
        next(err)
    }
});

router.post("/",AuthMiddleware, async(req:RequestWithUser, res:Response, next:NextFunction) =>{
    try {
        const data:CreateProductDto = req.body;
        if(req.user) {
            const result = await createNewProduct({...data , user: req.user});
            res.status(200).json(result);
        } else {
            res.status(400).send('User Not Found');
        }
    } catch (err :any) {
        next(err)
    }
});

router.put("/:id",AuthMiddleware, async(req:RequestWithUser, res:Response, next:NextFunction) =>{
    try {
        const data:CreateProductDto = req.body;
        const id : String = req.params.id;

        if(req.user) {
            const result = await updateProduct(id , {...data , user: req.user});
            res.status(200).json(result);
        } else {
            res.status(400).send('User Not Found');
        }
    } catch (err :any) {
        next(err)
    }
});

router.delete("/:id",AuthMiddleware, async(req: RequestWithUser, res:Response, next:NextFunction) =>{
    try {
        
        const id : String = req.params.id;
        const result = await deleteProduct(id);
        res.status(200).json(result);
       
    } catch (err :any) {
        next(err)
    }
});

export default router;