import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutService } from './checkout/checkout.service';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import CartRepository from "../../repository/Cart"
import {MongooseModule} from "@nestjs/mongoose";
import {CartDocSchema, CartSchema} from "../../schema/cart.schema";
import CartModel from "../../model/Cart.model";
@Module({
    controllers: [CheckoutController, PaymentController, CartController],
    providers: [{
        provide: "SERVICE_CHECKOUT",
        useClass:CheckoutService
    }, {
        provide: "SERVICE_PAYMENT",
        useClass:PaymentService
    }, {
        provide: "SERVICE_CART",
        useClass:CartService
    }, {
        provide: "REPO_CART",
        useClass:CartRepository
    }, {
        provide: "MODEL_CART",
        useClass:CartModel
    }
    ],
    imports: [MongooseModule.forFeature([{ name: CartDocSchema.name, schema: CartSchema }])]
})
export class CheckoutModule {}