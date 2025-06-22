"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_repository_1 = require("../repositories/product.repository");
class ProductController {
    static getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = product_repository_1.ProductRepository.getProductById(id);
            const response = { success: true, data: product };
            res.json(response);
        }
        catch (error) {
            console.error("Error fetching the products", error);
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    }
    static getAllProducts(req, res) {
        try {
            const products = product_repository_1.ProductRepository.findAll();
            const response = { success: true, data: products };
            res.json(response);
        }
        catch (error) {
            console.error("Error fetching the products", error);
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map