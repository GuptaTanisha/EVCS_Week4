import {getStations,bookSlot,contact,book,getSlots} from '../controllers/stations.js';
import express from 'express';

const router = express.Router();
router.get('/',getStations);
router.post('/:id/bookSlot',bookSlot);
router.post("/contact", contact);
router.get('/:id',getSlots);
router.post('/book',book);

export default router;