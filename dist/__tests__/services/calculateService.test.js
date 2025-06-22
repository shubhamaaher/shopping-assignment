"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatorService_1 = __importDefault(require("../../services/calculatorService"));
const basketService_1 = __importDefault(require("../../services/basketService"));
describe("Calculator Service", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    describe('calculate basket value', () => {
        it('calculate basket value', () => {
            const basketId = basketService_1.default.createNewBasket();
            basketService_1.default.addProduct(basketId, "1");
            basketService_1.default.addProduct(basketId, "4");
            basketService_1.default.addProduct(basketId, "4");
            basketService_1.default.addProduct(basketId, "4");
            const basketTotal = calculatorService_1.default.calculate(basketId);
            expect(basketTotal.subtotal).toBe(80);
            expect(basketTotal.total).toBe(65);
        });
        it('calculates the discounted total for the products depends on the offers', () => {
            const createBasket = basketService_1.default.createNewBasket();
            const insertProduct = basketService_1.default.addProduct(createBasket, "3");
            const basket = basketService_1.default.addProduct(createBasket, "3");
            const total = calculatorService_1.default.calculateDiscountedTotal(basket.items);
            expect(total).toBe(50);
        });
    });
});
//# sourceMappingURL=calculateService.test.js.map