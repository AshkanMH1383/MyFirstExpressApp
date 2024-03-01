import { NextFunction, Request, Response } from "express";
import { decodeToken } from "@src/Utils";

const AuthMiddleware = (( req: any, res: Response, next:NextFunction) =>{
    let token = req.headers.authorization ? req.headers.authorization : '';
    if(!token) res.status(401).send('Unauthorized');
    console.log(token)
    // token = token.split(" ")[1];
    try {
        const data : any = decodeToken(token);
        req['user'] = data.id;
        next()
    } catch (err: any) {
        res.status(401).send('Unauthorized');
    }
})

export default AuthMiddleware;