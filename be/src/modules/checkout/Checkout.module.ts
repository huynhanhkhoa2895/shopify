import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutService } from './checkout/checkout.service';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';

@Module({
    controllers: [CheckoutController, PaymentController],
    providers: [{
        provide: "SERVICE_CHECKOUT",
        useClass:CheckoutService
    }, {
        provide: "SERVICE_PAYMENT",
        useClass:PaymentService
    }]
})
export class CheckoutModule {}