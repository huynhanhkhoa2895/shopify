import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {CheckoutService} from "./checkout.service";
import {CheckoutItem} from "../../../entity/Checkout";

@Controller('checkout')
export class CheckoutController {
    constructor(@Inject("SERVICE_CHECKOUT")private cs: CheckoutService) {    }
    @Get()
    async getCheckout(){

    }
    @Post("addItem")
    async addProductCheckout(@Body() checkoutItem: CheckoutItem){
        this.cs.addProductCheckout(checkoutItem);
        return {data : 1}
    }
}
