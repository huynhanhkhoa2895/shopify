import { Injectable } from '@nestjs/common';
import ApiService from "../Services/api.service";

@Injectable()
export class ProductsService {
    constructor(private apiService: ApiService) {}
    list() : any{
        return this.apiService.storefront(`
            {
                products (first: 250) {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
            }
        `).then((data : any)=>{
            return data.body;
        }).catch((err : any)=>{
            return {
                err : 1
            }
        })
    }
}
