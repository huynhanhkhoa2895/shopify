import {Product} from "./Product";

export type CartItem = {
    id? : string,
    product : Product,
    qty: number
}

export type Cart = {
    id : string,
    items : Array<CartItem>
}

export interface CartService{
    getCart : () => Cart,
    add : (product : Product,qty : number) => Cart,
    update : (product : Product,qty : number) => Cart,
    remove : (product : Product) => Cart,
    clear : () => Cart,
    getCartLength : () => number,
    checkout : () => Cart,
}