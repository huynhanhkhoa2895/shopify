import CartService from "../Services/CartService";
import {Product} from "../Interfaces/Product";
import {Cart} from "../Interfaces/Cart";
import {selectorCart} from "../reducer/selector";
import {useDispatch, useSelector} from "react-redux";
import {addCart,updateCart} from "../reducer/action"
import {useEffect, useState} from "react";
export default () => {
    const dispatch = useDispatch();
    const cart : Cart = useSelector(selectorCart())
    const _addCart = (product : Product,qty : number) => dispatch(addCart(product,qty))
    const _updateCart = (product : Product,qty : number) => dispatch(updateCart(product,qty))

    const [cartLength,setCartLength] = useState<number>(0)

    useEffect(()=>{
        setCartLength(()=>{
            let count : number = 0;
            cart.items.map((item)=>{
                count += item.qty
            })
            return count
        })
    },[cart])

    const addToCart = (product : Product,qty: number = 1) => {
        _addCart(product,qty)
    }
    const removeFromCart = (product : Product) => {
        // return cartService.remove(product)
    }
    const updateToCart = (product : Product,qty: number = 1) => {
        _updateCart(product,qty)
    }
    const getCartItem = () => {
        // return cartService.getCart()
    }
    const getCartLength = () : number => {
        // return cartService.getCartLength()
        return cartLength
    }
    const checkout = () => {

    }
    return {cart,getCartItem,addToCart,updateToCart,removeFromCart,getCartLength,checkout}
}