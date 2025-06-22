import { Request, Response } from "express";
import BasketService from "../services/basketService";
import { APIResponse, Basket } from "../types";

export class BasketController{
    static removeProduct(req: Request, res: Response) {
        try {
            const {basketId, productId } = req.params;

            if(!productId || !basketId){
                res.status(400).json({
                    success: false,
                    error:'No product or basket provided'
                });
                return;
            }

            const basket: Basket = BasketService.removeProduct(basketId, productId);

            const response : APIResponse<{basket:Basket}> = {
                success : true,
                data: {basket:basket}
            }

            res.json(response);
            
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error'
            });
        }
    }
    static addProduct(req: Request, res: Response) {
        try {
            let {basketId, productId} = req.body;
            //data validation in controller
            if (!productId) {
                res.status(400).json({success:false, error:"Product ID cannot be null"});
                return;
            }
            if (!basketId) {
                basketId = BasketService.createNewBasket();
            }

            const basket = BasketService.addProduct(basketId, productId);

            if(!basket){
                res.status(400).json({
                    success:false,
                    error: 'Product not found'
                });
            }

            const response : APIResponse<{basket: Basket}> = {
                success: true,
                data: {basket:basket}
            }

            res.json(response);

        } catch (error) {
            console.log(error);
            res.status(400).json({
                success:false, 
                error:'Internal Server Error'
        });
        }
    }

}