import {Inject, Injectable} from '@nestjs/common';
import CartRepo from "../../../repository/Cart";
import {Cart, CartCost, CartId, CartItem} from "../../../entity/Cart";
import {ConfigService} from "@nestjs/config";
import getData from "../../../adapter";

type CartBodyType = {
    cartId : CartId,
    item: CartItem,
    cost?: CartCost,
    createdAt? : string,
    updatedAt? : string
}

@Injectable()
export class CartService {
    constructor(@Inject("REPO_CART")protected repo: CartRepo,private configService: ConfigService) {
    }

    createCartData({cartId,item,cost,createdAt,updatedAt} : CartBodyType) : Cart{
        return {
            cartId : cartId,
            cost,
            items : [item],
            createdAt : createdAt || new Date().toISOString(),
            updatedAt : updatedAt || new Date().toISOString(),
        }
    }

    addProductCart(deviceId: string,cartItem : CartBodyType){
        const {cartId,item} = cartItem;
        //

        if(!cartId) {
            return this.repo.createCart(item.variantId).then(async ({data} : any)=>{
                const resultStorefront : Cart = getData("cart",data?.cartCreate?.cart,{productId : item.productId,variantId : item.variantId});
                if(resultStorefront){
                    const {cost,cartId,createdAt,updatedAt,items} = resultStorefront;
                    const cartData : Cart = this.createCartData({
                        cartId,
                        item : items[0],
                        cost,
                        createdAt,
                        updatedAt
                    })
                    return await this.repo.addToDB({deviceId,cart : cartData})
                }
            }).catch((err : any)=>{
                return err;
            });
        } else{
            const lineCartId = "";
            // return this;
        }
    }

    // addToDB(cart : Cart){
    //     const cartDB : CartDB = {
    //         deviceId : "123test",
    //         cart
    //     }
    //     return this.repo.addToDB(cartDB)
    // }
    //
    getAllCart(){
        return this.repo.getAllDB()
    }
}
