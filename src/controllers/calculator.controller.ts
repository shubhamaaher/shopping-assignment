import { Request, Response } from "express";
import { APIResponse, Basket, Calculation } from '../types';
import CalculatorService from "../services/calculatorService";

export class CalculatorController{
    static calculate(req: Request, res: Response){
        try {
            const { basketId } = req.params;

            if(!basketId){
                res.status(500).json({
                    success: false,
                    error: 'Send the basket Id to get the total.'
                });
                return;
            }

            const calculatedPrice = CalculatorService.calculate(basketId);

            const response: APIResponse<{calculatedPrice: Calculation}> = {
                success:true,
                data: { calculatedPrice: calculatedPrice}
            };
            res.json(response);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error'
            })    
        }
    }
}