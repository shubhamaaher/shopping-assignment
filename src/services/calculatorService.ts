import { off } from "process";
import { ProductRepository } from "../repositories/product.repository";
import { Calculation, Product, Quantity, Offer, Basket } from "../types";
import OffersService from "./offersService";
import { time } from "console";
import BasketRepository from "../repositories/basket.repository";

export default class CalculatorService{
    static calculate(basketId: string): Calculation {
        // let total: number = 0;
        const basket = BasketRepository.getBasketById(basketId);
        if(!basket || !basket.items){
            throw "Did not find basket with ID - "+ basketId;
        }
        const subtotal: number = this.calculateSubtotal(basket.items);

        const total: number = this.calculateDiscountedTotal(basket.items);

        const basketValue: Calculation = {
            subtotal: subtotal,
            total: total
        }

        return basketValue; 
    }
    static calculateDiscountedTotal(items: Product[]): number {
        const quantities = this.getQuantities(items);

        console.log(`quantities - ${JSON.stringify(quantities)}`);
        let total: number = 0;

        const keys: string[] = Object.keys(quantities);

        keys.forEach(productId=>{
            console.log(`calculating price for product id ${productId}`);
            total += this.getPriceOfProduct(productId, quantities[productId]);
        });
        console.log(`total - ${total}`);
        
        return total;
    }
    static getPriceOfProduct(productId: string, quantity: number) : number {
        const offer: Offer = OffersService.getOfferFronProductId(productId);
        const product: Product = ProductRepository.getProductById(productId);
        let price: number = 0;

        if (!product) {
            return 0;
        }
        if(!offer){
            return quantity * product.price;
        }

        console.log(`Offer details - ${JSON.stringify(offer)}`);
        console.log(`Product details - ${JSON.stringify(product)}`);

        const times: number = Math.trunc(quantity / (offer.quantity + offer.free));
        const remainingItem: number = quantity % (offer.quantity + offer.free);
        const priceApplyQuantity: number = offer.quantity * times + remainingItem;

        console.log(
            `total Quantity - ${quantity}, 
            offer quantity - ${offer.quantity},
            price to apply - ${times} times,
            total quantity on which price should be applied - ${priceApplyQuantity}`
        );
        
        price = priceApplyQuantity*product.price;

        console.log(`price returning for product ${price}`);
        
        return price;
    }
    static getQuantities(items: Product[]) : Quantity{
        const quantity = {};

        items.forEach(product => {
            const productId = product.id;
            quantity[productId] = (quantity[productId] || 0) + 1;
        });

        return quantity;
    }
    static calculateSubtotal(items: Product[]): number {
        let subtotal: number = 0;

        items.forEach(item=>{
            subtotal+=item.price
        });

        return subtotal;
    }
}