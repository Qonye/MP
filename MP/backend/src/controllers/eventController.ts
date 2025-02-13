import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-db-user',
  host: 'your-db-host',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

export const createEvent = async (req: Request, res: Response) => {
  const {
    vendor_id,
    title,
    description,
    category,
    date,
    time,
    location,
    difficulty,
    price,
    max_participants,
    image,
    itinerary,
    what_to_bring,
    included_excluded,
    safety_info,
    promoted,
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Events (vendor_id, title, description, category, date, time, location, difficulty, price, max_participants, image, itinerary, what_to_bring, included_excluded, safety_info, promoted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
      [
        vendor_id,
        title,
        description,
        category,
        date,
        time,
        location,
        difficulty,
        price,
        max_participants,
        image,
        itinerary,
        what_to_bring,
        included_excluded,
        safety_info,
        promoted,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEventDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Events WHERE event_id = $1', [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
