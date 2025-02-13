import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-db-user',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

export const registerVendor = async (req: Request, res: Response) => {
  const { name, email, password, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Vendors (name, email, password, description, approved) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, password, description, false]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVendorProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Vendors WHERE vendor_id = $1', [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
