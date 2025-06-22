import { Router } from "express";
import { CalculatorController } from "../controllers/calculator.controller";

const router = Router();

router.get('/calculate/:basketId', CalculatorController.calculate);

export default router;