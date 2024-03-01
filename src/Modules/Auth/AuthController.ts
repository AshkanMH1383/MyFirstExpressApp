// Import Libs
import { Request, Response, Router } from "express";

// Import Middlewares
import { ValidateMiddleware } from "@src/Middlewares";

// Import Dtos
import LoginDto from "./Dtos/LoginDto";
import RegisterDto from "./Dtos/RegisterDto";

// Import Services
import { login, register } from './AuthServices';

// Create Route
const router = Router();

// Routes
router.post("/login",ValidateMiddleware(LoginDto), async (req:Request, res:Response) =>{
    try {
        const body : LoginDto = req.body;
        res.send(await login(body));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

router.post("/register",ValidateMiddleware(RegisterDto), async (req:Request, res:Response) =>{
    try {
        const body : RegisterDto = req.body;
        res.send(await register(req.body));
    } catch (err :any) {
        res.status(500).send({message: err.message});
    }
});

export default router;