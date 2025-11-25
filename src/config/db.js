import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
 host:'localhost',
 port: 5432,
 database: 'bakeryhub_auth',
 user: 'postgres',
 password: 'auth123' // Replace with your actual password or use environment variables for better security
});

export default pool;