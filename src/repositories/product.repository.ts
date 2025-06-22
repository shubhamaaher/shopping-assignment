import ProductsData from '../data/products.json';
import { Product } from '../types';
export class ProductRepository{
    // static findProductById(productId: string): Product | undefined {
    //     return ProductsData.find(product =>product.id === productId);
    // }
    static getProductById(id: string): Product | undefined {
        try {
            return ProductsData.find( product=> product.id === id);
        } catch (error) {
            return undefined;
        }
    }
    static findAll(): Product[] {
        try {
            return ProductsData;
        } catch (error) {
            throw 'There are no products';
        }
    }
}