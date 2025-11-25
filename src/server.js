import express from 'express';
import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config();
import pool from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;  
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the BakeryHUB Auth Service!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});