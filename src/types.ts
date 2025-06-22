export interface APIResponse<T>{
    success: boolean;
    data?: T;
    error?: string;
}

export interface Product{
    id: string;
    name: string;
    price: number;
}

export interface Basket{
    basketId:string;
    items: Product[];
}
export interface Calculation{
    subtotal: number,
    total: number
}
export interface Offer{
    offerId: string,
    name: string,
    quantity: number,
    free: number
}
export interface Quantity{
    [key: string]: number;
}