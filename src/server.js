import express from 'express';
import dotenv from 'dotenv';
import pool from  "./config/db.js";
const app = express();
const PORT = 5000;
dotenv.config();
app.listen(
    PORT,() => {
        console.log(`app is running in port ${PORT}`); 
    }
);

//create a user
app.post('/createUser',(req,res) =>{
    
});
