import { Router } from 'express';
import { getCars, addCar, deleteCar, updateCar } from '../controllers/carController';

const router = Router();

router.get('/', getCars);
router.post('/', addCar);
router.delete('/:id', deleteCar);
router.put('/:id', updateCar);

export default router;
