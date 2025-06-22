import CalculatorService from "../../services/calculatorService";
import BasketService from "../../services/basketService";
import { Basket } from "../../types";

describe("Calculator Service", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks();
    });

    describe('calculate basket value', ()=>{
        it('calculate basket value', ()=>{
            const basketId = BasketService.createNewBasket();
            BasketService.addProduct(basketId, "1");
            BasketService.addProduct(basketId, "4");
            BasketService.addProduct(basketId, "4");
            BasketService.addProduct(basketId, "4");
            const basketTotal = CalculatorService.calculate(basketId);
            expect(basketTotal.subtotal).toBe(80);
            expect(basketTotal.total).toBe(65); 
        });

        it('calculates the discounted total for the products depends on the offers',()=>{
            const createBasket = BasketService.createNewBasket();
            const insertProduct = BasketService.addProduct(createBasket, "3");
            const basket = BasketService.addProduct(createBasket, "3");
            const total = CalculatorService.calculateDiscountedTotal(basket.items);
            expect(total).toBe(50); 
        });
    });
})