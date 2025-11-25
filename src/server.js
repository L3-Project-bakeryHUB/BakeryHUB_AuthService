import express from 'express';
import pool from './config/db.js'; // Import pool using ES module syntax

const app = express();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to BakeryHUB Auth Service');
});

// Test DB connection route
app.get('/auth', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send('Connected! Time: ' + result.rows[0].now);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to AWS RDS');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
