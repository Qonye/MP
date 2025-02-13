import express from 'express';
import { registerVendor, getVendorProfile } from '../controllers/vendorController';

const router = express.Router();

router.post('/register', registerVendor);
router.get('/profile/:id', getVendorProfile);

export default router;
