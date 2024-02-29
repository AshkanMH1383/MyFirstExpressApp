// Import Libs
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Import Controllers
import UsersControllers from './Users/UsersControllers';
import ProductsControllers from './Products/ProductsControllers';

// Express App
const app = express();

// Use Libs
app.use(cors());
app.use(express.json()); // parse to json


// Routes Group
app.use("/users", UsersControllers);
app.use("/products", ProductsControllers);


// Run Server
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/',{
    autoIndex: true,
})
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
.catch(error => {
    console.log(error)
})


