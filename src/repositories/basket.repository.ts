import {Basket, Product} from '../types';
import { randomUUID, UUID } from 'crypto';
import { ProductRepository } from './product.repository';

//basket array acting as in memory database
const baskets : Basket[] = [];


export default class BasketRepository{
    static removeItem(basketId: string, productId: string): Basket {
        const basket: Basket = baskets.find(basket=>basket.basketId===basketId);

        if(!basket || !basket.items){
            return;
        }

        const deleteIndex: number = basket.items.findIndex(product=>product.id===productId);

        if(deleteIndex !== -1){
            basket.items.splice(deleteIndex, 1);
        }

        console.log("Returning from remove item-"+ JSON.stringify(basket));

        return basket;
    }

    static add(basketId: string, productId: string) : Basket {

        const product: Product = ProductRepository.getProductById(productId);
        const basket = baskets.find(basket=>basket.basketId===basketId);

        basket.items.push(product);

        console.log("Returning from remove item - "+ JSON.stringify(basket));

        return basket;
    }
    static create(): Basket {
        const basket : Basket = {
            basketId: randomUUID(),
            items: []
        };

        this.save(basket);

        console.log("Returning from remove item - "+ JSON.stringify(basket));
        return basket;
    }
    static save(basket: Basket): void{
        baskets.push(basket);
    }

    static getBasketById(basketId: string): Basket {
        return baskets.find(basket=>basket.basketId===basketId);
    }

}