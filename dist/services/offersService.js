"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const offers_json_1 = __importDefault(require("../data/offers.json"));
class OffersService {
    static getOfferFronProductId(productId) {
        return offers_json_1.default.find(offer => offer.productId === productId);
    }
}
exports.default = OffersService;
//# sourceMappingURL=offersService.js.map