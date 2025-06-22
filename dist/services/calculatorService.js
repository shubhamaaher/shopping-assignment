"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = require("../repositories/product.repository");
const offersService_1 = __importDefault(require("./offersService"));
const basket_repository_1 = __importDefault(require("../repositories/basket.repository"));
class CalculatorService {
    static calculate(basketId) {
        // let total: number = 0;
        const basket = basket_repository_1.default.getBasketById(basketId);
        if (!basket || !basket.items) {
            throw "Did not find basket with ID - " + basketId;
        }
        const subtotal = this.calculateSubtotal(basket.items);
        const total = this.calculateDiscountedTotal(basket.items);
        const basketValue = {
            subtotal: subtotal,
            total: total
        };
        return basketValue;
    }
    static calculateDiscountedTotal(items) {
        const quantities = this.getQuantities(items);
        console.log(`quantities - ${JSON.stringify(quantities)}`);
        let total = 0;
        const keys = Object.keys(quantities);
        keys.forEach(productId => {
            console.log(`calculating price for product id ${productId}`);
            total += this.getPriceOfProduct(productId, quantities[productId]);
        });
        console.log(`total - ${total}`);
        return total;
    }
    static getPriceOfProduct(productId, quantity) {
        const offer = offersService_1.default.getOfferFronProductId(productId);
        const product = product_repository_1.ProductRepository.getProductById(productId);
        let price = 0;
        if (!product) {
            return 0;
        }
        if (!offer) {
            return quantity * product.price;
        }
        console.log(`Offer details - ${JSON.stringify(offer)}`);
        console.log(`Product details - ${JSON.stringify(product)}`);
        const times = Math.trunc(quantity / (offer.quantity + offer.free));
        const remainingItem = quantity % (offer.quantity + offer.free);
        const priceApplyQuantity = offer.quantity * times + remainingItem;
        console.log(`total Quantity - ${quantity}, 
            offer quantity - ${offer.quantity},
            price to apply - ${times} times,
            total quantity on which price should be applied - ${priceApplyQuantity}`);
        price = priceApplyQuantity * product.price;
        console.log(`price returning for product ${price}`);
        return price;
    }
    static getQuantities(items) {
        const quantity = {};
        items.forEach(product => {
            const productId = product.id;
            quantity[productId] = (quantity[productId] || 0) + 1;
        });
        return quantity;
    }
    static calculateSubtotal(items) {
        let subtotal = 0;
        items.forEach(item => {
            subtotal += item.price;
        });
        return subtotal;
    }
}
exports.default = CalculatorService;
//# sourceMappingURL=calculatorService.js.map