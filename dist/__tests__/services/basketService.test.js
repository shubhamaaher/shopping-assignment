"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basketService_1 = __importDefault(require("../../services/basketService"));
describe("BasketService", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    describe('create new basket', () => {
        it('create new basket', () => {
            const createBasket = basketService_1.default.createNewBasket();
            expect(createBasket).toBeTruthy();
        });
        it('add new product to the basket', () => {
            const createBasket = basketService_1.default.createNewBasket();
            const insertProduct = basketService_1.default.addProduct(createBasket, "1");
            expect(insertProduct.basketId).toBeTruthy();
            expect(insertProduct.items.length).toBe(1);
        });
        it('remove product from the basket', () => {
            const createBasket = basketService_1.default.createNewBasket();
            const insertProduct = basketService_1.default.addProduct(createBasket, "1");
            const removeProduct = basketService_1.default.removeProduct(createBasket, "1");
            expect(insertProduct.basketId).toBeTruthy();
            expect(insertProduct.items.length).toBe(0);
        });
    });
});
//# sourceMappingURL=basketService.test.js.map