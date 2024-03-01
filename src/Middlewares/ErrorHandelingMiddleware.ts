import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ServerError from "@src/Errors/ServerError";
import Logger from "@src/Helper/Logger";


const ErrorHandelingMiddleware = ((error:ErrorRequestHandler, req: any, res: Response, next:NextFunction) =>{
    if(error instanceof ServerError) {
        res.status(error.status).send({
            message: error.message
        })
    } else {
        Logger.error(error);
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
})

export default ErrorHandelingMiddleware;