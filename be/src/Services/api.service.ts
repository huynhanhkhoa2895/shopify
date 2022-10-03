import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Shopify, {RequestReturn} from "@shopify/shopify-api";
import {StorefrontClient} from "@shopify/shopify-api/dist/clients/graphql/storefront_client";

@Injectable()
export default class {
  headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': 'application/json',
  }

  constructor(private configService: ConfigService) {}
  storefront(data : string) : Promise<any>{
    const client : StorefrontClient = new Shopify.Clients.Storefront(
        this.configService.get('shopify.shop') || "",
        this.configService.get('shopify.storefrontKey'),
    );
    return client.query({
      data: `${data.toString()}`
    }).then((data : any)=>{
      return {
        status : 1,
        data: data?.body?.data,
        error : null
      }
    }).catch((err : any)=>{
      return {
        status : 0,
        data : null,
        error : err?.response?.errors[0]
      }
    })
  }
}