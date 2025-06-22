"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basket_repository_1 = __importDefault(require("../repositories/basket.repository"));
class BasketService {
    static removeProduct(basketId, productId) {
        return basket_repository_1.default.removeItem(basketId, productId);
    }
    static addProduct(basketId, productId) {
        return basket_repository_1.default.add(basketId, productId);
    }
    static createNewBasket() {
        const newBasket = basket_repository_1.default.create();
        return newBasket.basketId;
    }
}
exports.default = BasketService;
//# sourceMappingURL=basketService.js.map