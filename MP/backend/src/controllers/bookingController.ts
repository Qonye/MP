import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-db-user',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

export const createBooking = async (req: Request, res: Response) => {
  const { user_id, event_id, date, num_participants, total_price, payment_status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Bookings (user_id, event_id, date, num_participants, total_price, payment_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, event_id, date, num_participants, total_price, payment_status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookingDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Bookings WHERE booking_id = $1', [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
