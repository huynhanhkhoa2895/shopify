import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {ResourceResponse} from "../../../entity/Common";
import {CartService} from "./cart.service";
import {getResource} from "../../../adapter";
import {CartId, CartItem} from "../../../entity/Cart";
type CartBodyType = {
    cartId : CartId,
    item : CartItem,
    deviceId: string
}
@Controller('cart')
export class CartController {
    constructor(@Inject("SERVICE_CART")private cs: CartService) {    }
    @Get("getAll")
    async getAll(){
        const result = await this.cs.getAllCart()
        return getResource({status : 1,data : result,error : null})
    }
    @Post("addToCart")
    async addToCart(@Body() {cartId,item,deviceId} : CartBodyType) : Promise<ResourceResponse>{
        // const result = await this.cs.addProductCart({cartId,variantId})

        const result = await this.cs.addProductCart(deviceId,{
            cartId,
            item,
        })
        return getResource({status : 1,data : result,error : null})
    }
}
