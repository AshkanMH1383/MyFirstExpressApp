// Import Libs
import { NextFunction, Request, Response, Router } from "express";

// Import Middlewares
import { AuthMiddleware, ValidateMiddleware } from "@src/Middlewares";

// Import Services
import { createNewUser, getAllUsers, getOneUser, deleteOneUser, updateOneUser } from './UserServices';

// Import Dtos
import CreateUserDto from "./Dtos/CreateUserDto";
import User from "./Dtos/UserDto";

// Create Routes
const router = Router();

//Routes
router.get("/",AuthMiddleware, async (req:Request, res:Response, next: NextFunction) =>{
    try {
        res.send(await getAllUsers());
    } catch (err :any) {
        next(err);
    }
});

router.get("/:id", async (req:Request, res:Response, next: NextFunction) =>{
    try {
        res.send(await getOneUser(req.params.id));
    } catch (err :any) {
        next(err);
    }
});

router.post("/",ValidateMiddleware(CreateUserDto), async(req:Request, res:Response, next: NextFunction) =>{
    try {
        const body: User = req.body;
        res.send(await createNewUser(body));
    } catch (err: any) {
        next(err);
    }
});

router.put("/:id", async (req:Request, res:Response, next: NextFunction) =>{
    try {
        const body: User = req.body;
        res.send(await updateOneUser(req.params.id , body));
    } catch (err :any) {
        next(err);
    }
});

router.delete("/:id", async(req:Request, res:Response, next: NextFunction) =>{
    try {
        res.send(await deleteOneUser(req.params.id));
    } catch (err :any) {
        next(err);
    }
});

export default router;