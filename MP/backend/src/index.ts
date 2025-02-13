import express from 'express';
import { Pool } from 'pg';
import Stripe from 'stripe';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import vendorRoutes from './routes/vendorRoutes';
import eventRoutes from './routes/eventRoutes';
import bookingRoutes from './routes/bookingRoutes';
import paymentRoutes from './routes/paymentRoutes';
import disbursementRoutes from './routes/disbursementRoutes';
import badgeRoutes from './routes/badgeRoutes';
import reviewRoutes from './routes/reviewRoutes';
import healthCheckRoutes from './routes/healthCheckRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2020-08-27' });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT as string, 10),
});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/disbursements', disbursementRoutes);
app.use('/api/badges', badgeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/health', healthCheckRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
