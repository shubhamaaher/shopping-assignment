"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const products_json_1 = __importDefault(require("../data/products.json"));
class ProductRepository {
    // static findProductById(productId: string): Product | undefined {
    //     return ProductsData.find(product =>product.id === productId);
    // }
    static getProductById(id) {
        try {
            return products_json_1.default.find(product => product.id === id);
        }
        catch (error) {
            return undefined;
        }
    }
    static findAll() {
        try {
            return products_json_1.default;
        }
        catch (error) {
            throw 'There are no products';
        }
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map