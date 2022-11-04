import {Body, Controller, Get, Inject, Post, Put, Query} from '@nestjs/common';
import {ResourceResponse} from "../../../entity/Common";
import {CartService} from "./cart.service";
import {getResource} from "../../../adapter";
import {CartId, CartItem, CartLineId} from "../../../entity/Cart";
type CartBodyType = {
    cartId : CartId | null,
    lineId : CartLineId | null,
    item : CartItem,
    deviceId: string
}
@Controller('cart')
export class CartController {
    constructor(@Inject("SERVICE_CART")private cs: CartService) {    }
    @Get()
    async getAll(){
        try{
            const result = await this.cs.getAllCart()
            return getResource({status : 1,data : result,error : null})
        } catch(error : any) {
            return getResource({status : 0,data : [],error})
        };

    }
    @Get('get')
    async getCart(@Query() params : {id : string}){
        try{
            const result = await this.cs.getCart(params.id)
            return getResource({status : 1,data : result,error : null})
        } catch(error : any) {
            return getResource({status : 0,data : [],error})
        };

    }

    @Post("addToCart")
    async addToCart(@Body() {cartId,lineId,item,deviceId} : CartBodyType) : Promise<ResourceResponse>{
        try{
            const result = await this.cs.addProductCart(deviceId,{
                cartId,
                lineId,
                item,
            })
            return getResource({status : 1,data : result,error : null})
        }catch(error : any) {
            return getResource({status : 0,data : [],error})
        };
    }

    @Put("updateCart")
    async updateCart(@Body() {type, deviceId, cartId,param} : any) : Promise<ResourceResponse>{
        try{
            const result = await this.cs.updateCartHandler(type,deviceId, cartId,param)

            return getResource({status : 1,data : result,error : null})
        }catch(error : any) {
            return getResource({status : 0,data : [],error})
        };
    }
}
