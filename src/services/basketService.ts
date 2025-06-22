import BasketRepository from "../repositories/basket.repository";
import { Basket } from "../types";

export default class BasketService {
    static removeProduct(basketId: string, productId: string): Basket {
        return BasketRepository.removeItem(basketId, productId);
    }
    static addProduct(basketId: string, productId: string): Basket {
        return BasketRepository.add(basketId, productId);
    }
    static createNewBasket(): string {
        const newBasket = BasketRepository.create();
        return newBasket.basketId;
    }
}