import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-db-user',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

export const createReview = async (req: Request, res: Response) => {
  const { user_id, event_id, vendor_id, rating, comment } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Reviews (user_id, event_id, vendor_id, rating, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, event_id, vendor_id, rating, comment]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  const { event_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Reviews WHERE event_id = $1', [event_id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
