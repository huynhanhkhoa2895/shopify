import {Inject, Injectable} from '@nestjs/common';
import CartRepo from "../../../repository/Cart";
import {Cart, CartCost, CartId, CartItem, CartLineId} from "../../../entity/Cart";
import {ConfigService} from "@nestjs/config";
import getData from "../../../adapter";
import {ResponseShopify} from "../../../entity/GraphqlOption";

type CartItemType = {
    item: CartItem,
    cost?: CartCost,
    createdAt? : string,
    updatedAt? : string
}

type CartTypeCanNull = {
    cartId : CartId | null,
    lineId : CartLineId | null
}

type CartTypeNotNull = {
    cartId : CartId,

}

@Injectable()
export class CartService {
    constructor(@Inject("REPO_CART")protected repo: CartRepo,private configService: ConfigService) {
    }

    addProductCart(deviceId: string,cartItem : CartTypeCanNull & CartItemType){
        const {cartId,item} = cartItem;
        //
        if(!cartId) {
            return this.repo.createCartFromShopify(item.variantId).then(async ({data} : ResponseShopify)=>{
                const resultStorefront : Cart = getData("cart",data?.cartCreate?.cart,{productId : item.productId,variantId : item.variantId});

                if(resultStorefront){
                    const {cartId,createdAt,updatedAt,items} = resultStorefront;
                    const cartData : any = {
                        cartId,
                        item : items.map((cartItem: CartItem)=>{
                            const _cartItem : any = {...cartItem};
                            delete _cartItem['qty'];
                            return _cartItem;
                        }),
                        createdAt : createdAt || new Date().toISOString(),
                        updatedAt : updatedAt || new Date().toISOString(),
                    }
                    return await this.repo.cartModel.create({deviceId,cart : cartData})
                }
            }).catch((err : any)=>{
                throw(err)
            });
        }
    }

    updateCartHandler(type: string,deviceId : string,cartId : string,cartParam : any){
        if(type === "line") {
            return this.updateLine(deviceId,cartId,cartParam)
        }else{
            // return this.updateCustomerInfomation(deviceId,cartId,cartParam)
        }
    }

    updateCustomerInfomation(deviceId: string,cartId : string,param : {lineId : string, qty : number}) {
        // return this.repo.updateLineCartFromShopify(cartId,lineId, qty).then(async ({data} : any)=>{
        //     const resultStorefront : Cart = getData("cart",data?.cartLinesUpdate?.cart);
        //     return resultStorefront
        // }).catch((err : any)=>{
        //     throw(err)
        // });
    }

    updateLine(deviceId: string,cartId : string,param : {lineId : string, qty : number}) {
        const {lineId, qty} = param;
        return this.repo.updateLineCartFromShopify(cartId,lineId, qty).then(async ({data} : ResponseShopify)=>{
            const resultStorefront : any = getData("cart",data?.cartLinesUpdate?.cart);
            return resultStorefront
        }).catch((err : any)=>{
            throw(err)
        });
    }

    getAllCart(){
        try{
            return this.repo.cartModel.getAll();
        } catch (err : any) {
            throw(err)
        }

    }

    getCart(id: string){
        try{
            return this.repo.getCartFromShopify(id).then(({data} : any)=>{
                return data?.cart
            }).catch((err : any)=>{
                throw(err)
            });
        } catch (err : any) {
            throw(err)
        }

    }
}
