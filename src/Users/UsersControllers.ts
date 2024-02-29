import { Request, Response, Router } from "express";

import { AuthMiddleware , ValidateMiddleware} from "../Middlewares";

import { createNewUser, getAllUsers, getOneUser, deleteOneUser, updateOneUser } from './UsersServices';
import CreateUserDto from "./Dtos/CreateUserDto";
import User from "./Dtos/UserDto";

const router = Router();

//all route middleware
//router.use(AuthMiddleware);

router.get("/", async (req:Request, res:Response) =>{
    try {
        res.send(await getAllUsers());
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.get("/:id", async (req:Request, res:Response) =>{
    try {
        res.send(await getOneUser(req.params.id));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.post("/",ValidateMiddleware(CreateUserDto), async(req:Request, res:Response) =>{
    try {
        const body: User = req.body;
        res.send(await createNewUser(body));
    } catch (err: any) {
        res.status(500).send({message: err.message});
    }
});

router.put("/:id", async (req:Request, res:Response) =>{
    try {
        const body: User = req.body;
        res.send(await updateOneUser(req.params.id , body));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.delete("/:id", async(req:Request, res:Response) =>{
    try {
        res.send(await deleteOneUser(req.params.id));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

export default router;