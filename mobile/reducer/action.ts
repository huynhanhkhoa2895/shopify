import {ADD_CART,UPDATE_CART,REMOVE_CART,CLEAR_CART} from "./constant"
import {createAction} from "@reduxjs/toolkit";
import {Cart} from "../Interfaces/Cart";
import {Product} from "../Interfaces/Product";

// actions
export const addCart = createAction(ADD_CART,(product : Product,qty : number)=>({
    payload : {
        product,
        qty
    }
}));
export const updateCart = createAction(UPDATE_CART,(product : Product,qty : number)=>({
    payload : {
        product,
        qty
    }
}));

export const removeCart = () => createAction(REMOVE_CART);
export const clearCart = () => createAction(CLEAR_CART)