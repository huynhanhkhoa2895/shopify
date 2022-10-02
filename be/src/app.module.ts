import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutController } from './checkout/checkout.controller';
import { ConfigModule } from '@nestjs/config';
import { CheckoutService } from './checkout/checkout.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import configuration from '../config/configuration';
import ApiService from './Services/api.service';
import ProductRepository from "./repository/Product"
@Module({
  controllers: [AppController, CheckoutController, ProductsController],
  providers: [
      AppService,
      CheckoutService,
      ApiService,
      ProductsService,
      ProductRepository
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
