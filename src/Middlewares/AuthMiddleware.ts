import { NextFunction, Request, Response } from "express";

const AuthMiddleware = (( req: Request, res: Response, next:NextFunction) =>{
    if(req.body.token == '1234' && req.body.role == 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
})

export default AuthMiddleware;