import {ADD_CART,REMOVE_CART,CLEAR_CART,UPDATE_CART} from "./constant"
import {configureStore, createReducer} from '@reduxjs/toolkit'
import CartService from "../Services/CartService";
import {Product} from "../Interfaces/Product";
import {Cart} from "../Interfaces/Cart";

type State = {
    cart : Cart,

}

const cartService = new CartService()
const initialState : any = { cart:  cartService.cart }
const rootReducer = createReducer(initialState, {
    [ADD_CART]: (state: State,action) => {
        const {product,qty} = action.payload;
        state.cart = cartService.add(product,qty)
        return state
    },
    [UPDATE_CART]: (state: State,action) => {
        const {product,qty} = action.payload;
        state.cart = cartService.update(product,qty)
        return state
    },
})

const store = configureStore({
    reducer: rootReducer
})

export default store

