import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT as string, 10),
});

export const healthCheck = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ status: 'OK', timestamp: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', error: error.message });
  }
};
