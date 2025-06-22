"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const basketService_1 = __importDefault(require("../services/basketService"));
class BasketController {
    static removeProduct(req, res) {
        try {
            const { basketId, productId } = req.params;
            if (!productId || !basketId) {
                res.status(400).json({
                    success: false,
                    error: 'No product or basket provided'
                });
                return;
            }
            const basket = basketService_1.default.removeProduct(basketId, productId);
            const response = {
                success: true,
                data: { basket: basket }
            };
            res.json(response);
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error'
            });
        }
    }
    static addProduct(req, res) {
        try {
            let { basketId, productId } = req.body;
            //data validation in controller
            if (!productId) {
                res.status(400).json({ success: false, error: "Product ID cannot be null" });
                return;
            }
            if (!basketId) {
                basketId = basketService_1.default.createNewBasket();
            }
            const basket = basketService_1.default.addProduct(basketId, productId);
            if (!basket) {
                res.status(400).json({
                    success: false,
                    error: 'Product not found'
                });
            }
            const response = {
                success: true,
                data: { basket: basket }
            };
            res.json(response);
        }
        catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                error: 'Internal Server Error'
            });
        }
    }
}
exports.BasketController = BasketController;
//# sourceMappingURL=basket.controller.js.map