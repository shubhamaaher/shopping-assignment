import { Request, Response } from "express";
import { ProductRepository } from "../repositories/product.repository";
import { APIResponse, Product } from "../types";

export class ProductController {
    static getProductById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const product = ProductRepository.getProductById(id);
            const response: APIResponse<Product> = {success:true, data:product};

            res.json(response);
        } catch (error) {
            console.error("Error fetching the products", error);
            res.status(500).json({
                success:false,
                error:"Internal Server Error"
            });
        }
    }
    static getAllProducts(req: Request, res: Response){
        try {
            const products = ProductRepository.findAll();
            const response: APIResponse<Product[]> = { success: true, data: products};
            
            res.json(response);
        } catch (error) {
            console.error("Error fetching the products", error);
            res.status(500).json({
                success:false,
                error:"Internal Server Error"
            });
        }
    }
}