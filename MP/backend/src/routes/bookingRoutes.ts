import express from 'express';
import { createBooking, getBookingDetails } from '../controllers/bookingController';

const router = express.Router();

router.post('/create', createBooking);
router.get('/:id', getBookingDetails);

export default router;
