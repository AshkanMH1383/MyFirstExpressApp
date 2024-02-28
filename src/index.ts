import express , {Request, Response, NextFunction} from 'express';

const app = express();

// Middleware
const myMiddleware = (( req: Request, res: Response, next:NextFunction) =>{
    console.log('time:', Date.now());
    next();
})

// app.use(myMiddleware);

// Routes
app.get("/", (req:Request, res:Response) =>{
    res.send("Home");
});

app.get("/users",myMiddleware, (req:Request, res:Response) =>{
    const users = [
        { name: "shkan", age:20},
        { name: "reza", age:12},
    ]
    res.send(users);
});

app.listen(3000, () => {
    console.log('Server Has Runnn')
})
