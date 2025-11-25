import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'bakeryhub',
  host: 'localhost',
  database: 'bakeryhub-auth',
  password: 'bakeryhub',
  port: 5432,
});

export default pool;
