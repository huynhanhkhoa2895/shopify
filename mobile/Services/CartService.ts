import {Cart,CartItem,CartService} from "../Interfaces/Cart";
import md5 from "md5"
import {Product} from "../Interfaces/Product";
function generateId(){
    return md5(md5(Math.random().toString())+md5(new Date().toString())+md5(Math.random().toString()))
}

export default class implements CartService{
    cart : Cart
    constructor(){
        this.cart = {
            id : generateId(),
            items : []
        }
    }

    getCart() : Cart{
        return this.cart
    }

    add(product : Product,qty : number = 1){
        const index : number = this.cart.items.findIndex(item => item.product.id === product.id)
        let cartItem : CartItem;
        let cartItems : Array<CartItem> = [...this.cart.items]
        if(index === -1){
            cartItem = {
                id : generateId(),
                product : product,
                qty : qty
            }
            cartItems.push(cartItem)
            this.cart = {...this.cart,...{items : cartItems}}
            return this.cart
        }else{
            return this.update(product,this.cart.items[index].qty+1)
        }

    }
    update(product : Product,qty : number = 1) : Cart{
        if(qty < 1){
            return this.remove(product)
        }else{
            const index : number = this.cart.items.findIndex(item => item.product.id === product.id)
            let cartItem : CartItem;
            let cartItems : Array<CartItem> = [...this.cart.items]
            cartItem = {...cartItems[index]}
            cartItem.qty = qty;
            cartItems[index] = cartItem;
            this.cart = {...this.cart,...{items : cartItems}}
            return this.cart
        }

    }
    remove(product : Product) : Cart{
        const index : number = this.cart.items.findIndex(item => item.product.id === product.id)
        let cartItems : Array<CartItem> = [...this.cart.items]
        if(index > -1){
            cartItems.splice(index,1);
        }
        this.cart = {...this.cart,...{items : cartItems}}
        return this.cart
    }

    getCartLength(){
        let numberLength : number = 0;
        this.cart.items.map((item : CartItem)=>{
            return numberLength+item.qty
        })
        return numberLength
    }

    checkout(){
        
        return this.cart
    }

    clear(){
        this.cart = {...{
            id : generateId(),
            items : new Array<CartItem>()
        }}
        return this.cart
    }

}