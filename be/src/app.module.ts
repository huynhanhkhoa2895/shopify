import { Module,Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import ApiService from './Services/api.service';
import {CatalogueModule} from "./modules/catalogue/Catalogue.module";
import BaseRepo from "./repository/Base";
import {CheckoutModule} from "./modules/checkout/Checkout.module";

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
    CatalogueModule,
    CheckoutModule
  ],
  exports: [ApiService,BaseRepo]
})
export class AppModule {}
