import { Router } from "express";
import { BasketController } from '../controllers/basket.controller';
const router = Router();

router.post('/addProduct', BasketController.addProduct);
router.delete('/removeProduct/:productId/:basketId', BasketController.removeProduct);

export default router;