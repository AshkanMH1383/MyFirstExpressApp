import express , {Request, Response, NextFunction} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// parse to json
app.use(express.json());

// Middleware
const myMiddleware = (( req: Request, res: Response, next:NextFunction) =>{
    console.log('time:', Date.now());
    next();
})



const AuthMiddleware = (( req: Request, res: Response, next:NextFunction) =>{
    if(req.body.token == '1234' && req.body.role == 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
})

// app.use(myMiddleware);

// Routes
// Get Data
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

// Post Data
app.post("/users",AuthMiddleware, (req:Request, res:Response) =>{
    console.log(req.body);
    res.send(req.body);
});

app.listen(3400, () => {
    console.log('Server Has Runnn')
})
