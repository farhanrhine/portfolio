import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Farhan09',
  database: 'portfolio'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// Example API endpoint
app.get('/api/projects', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
