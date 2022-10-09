import { Module,Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import ApiService from './Services/api.service';
import {CatalogueModule} from "./modules/catalogue/Catalogue.module";
import BaseRepo from "./repository/Base";
import {CheckoutModule} from "./modules/checkout/Checkout.module";
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  controllers: [],
  providers: [
      // AppService,
      // CheckoutService,
    ApiService,
    BaseRepo
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot('mongodb://superuser:superuser@0.0.0.0:8081/admin'),

    CatalogueModule,
    CheckoutModule
  ],
  exports: [ApiService,BaseRepo]
})
export class AppModule {}
