import { Injectable,Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Shopify, {RequestReturn} from "@shopify/shopify-api";
import {StorefrontClient} from "@shopify/shopify-api/dist/clients/graphql/storefront_client";
@Injectable()
export default class {
  headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': 'application/json',
  }
  private client: StorefrontClient;
  constructor(private configService: ConfigService) {
    this.client = new Shopify.Clients.Storefront(
        this.configService.get('shopify.shop') || "",
        this.configService.get('shopify.storefrontKey'),
    );
  }
  storefront(data : string) : Promise<any>{

    return this.client.query({
      data: `${data.toString()}`
    }).then((data : any)=>{
      return {
        status : 1,
        data: data?.body?.data,
      }
    }).catch((err : any)=>{
      return {
        status : 0,
        error : err?.response?.errors[0]
      }
    })
  }
}