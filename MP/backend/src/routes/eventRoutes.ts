import express from 'express';
import { createEvent, getEventDetails } from '../controllers/eventController';

const router = express.Router();

router.post('/create', createEvent);
router.get('/:id', getEventDetails);

export default router;
