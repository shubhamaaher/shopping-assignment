import BasketService from "../../services/basketService";
import { Basket } from "../../types";

describe("BasketService", ()=>{
    beforeEach(()=>{
        jest.resetAllMocks();
    });

    describe('create new basket', ()=>{
        it('create new basket', ()=>{
            const createBasket = BasketService.createNewBasket();
            expect(createBasket).toBeTruthy(); 
        });
        it('add new product to the basket',()=>{
            const createBasket = BasketService.createNewBasket();
            const insertProduct = BasketService.addProduct(createBasket, "1");
            expect(insertProduct.basketId).toBeTruthy();
            expect(insertProduct.items.length).toBe(1);
        });
        it('remove product from the basket',()=>{
            const createBasket = BasketService.createNewBasket();
            const insertProduct = BasketService.addProduct(createBasket, "1");
            const removeProduct = BasketService.removeProduct(createBasket, "1");
            expect(insertProduct.basketId).toBeTruthy();
            expect(insertProduct.items.length).toBe(0);
        });
    });
})