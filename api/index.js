import express from 'express';
import cors from 'cors';
import usersRouter from './src/routes/users.js'
import { db } from './src/config/db.js';


const app = express();

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    
    console.log("MySQL connected");
})


app.use(express.json());
app.use(cors());


// Routes
app.use('/', usersRouter);

app.listen(5000);