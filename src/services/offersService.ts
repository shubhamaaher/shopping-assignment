import { Offer } from "../types"
import Offers from '../data/offers.json';

export default class OffersService{
    static getOfferFronProductId( productId: string): Offer {
        return Offers.find(offer=>offer.productId === productId);
    }
}