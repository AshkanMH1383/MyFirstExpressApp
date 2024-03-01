// Import Libs
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Import Controllers
import UserController from '@Modules/User/UserController';
import ProductsController from '@Modules/Product/ProductController';
import AuthController from '@Modules/Auth/AuthController';
import Logger from './Helper/Logger';


// Express App
const app = express();

// Use Libs
app.use(cors());
app.use(express.json()); // parse to json


// Routes Group
app.use("/users", UserController);
app.use("/auth", AuthController);
app.use("/products", ProductsController);


// Run Server
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/',{
    autoIndex: true,
})
.then(() => {
    app.listen(3000, () => {
        Logger.info('Server is running on port 3000');
    })
})
.catch(error => {
    Logger.error("error", error);
})


