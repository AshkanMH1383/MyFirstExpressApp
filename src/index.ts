// Import Libs
import express from 'express';
import cors from 'cors';

// Import Controllers
import UsersControllers from './Users/UsersControllers'

// Express App
const app = express();

// Use Libs
app.use(cors());
app.use(express.json()); // parse to json


// Routes Group
app.use("/users", UsersControllers);


// Run Server
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
