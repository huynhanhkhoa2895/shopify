import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {CheckoutService} from "./checkout.service";
import {CartItem} from "../../../entity/Cart";

@Controller('checkout')
export class CheckoutController {
    constructor(@Inject("SERVICE_CHECKOUT")private cs: CheckoutService) {    }
    @Get()
    async getCheckout(){

    }
    @Post("addItem")
    async addProductCheckout(@Body() cartItem: CartItem){
        this.cs.addProductCheckout(cartItem);
        return {data : 1}
    }
}
