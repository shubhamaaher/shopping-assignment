"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const product_repository_1 = require("./product.repository");
//basket array acting as in memory database
const baskets = [];
class BasketRepository {
    static removeItem(basketId, productId) {
        const basket = baskets.find(basket => basket.basketId === basketId);
        if (!basket || !basket.items) {
            return;
        }
        const deleteIndex = basket.items.findIndex(product => product.id === productId);
        if (deleteIndex !== -1) {
            basket.items.splice(deleteIndex, 1);
        }
        console.log("Returning from remove item-" + JSON.stringify(basket));
        return basket;
    }
    static add(basketId, productId) {
        const product = product_repository_1.ProductRepository.getProductById(productId);
        const basket = baskets.find(basket => basket.basketId === basketId);
        basket.items.push(product);
        console.log("Returning from remove item - " + JSON.stringify(basket));
        return basket;
    }
    static create() {
        const basket = {
            basketId: (0, crypto_1.randomUUID)(),
            items: []
        };
        this.save(basket);
        console.log("Returning from remove item - " + JSON.stringify(basket));
        return basket;
    }
    static save(basket) {
        baskets.push(basket);
    }
    static getBasketById(basketId) {
        return baskets.find(basket => basket.basketId === basketId);
    }
}
exports.default = BasketRepository;
//# sourceMappingURL=basket.repository.js.map