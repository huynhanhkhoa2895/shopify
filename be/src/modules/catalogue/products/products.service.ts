import {Inject, Injectable} from '@nestjs/common';
import ProductRepo from "../../../repository/Product";

@Injectable()
export class ProductsService {
    constructor(@Inject("REPO_PRODUCT")private repo: ProductRepo) {}
    async list(){
        return await this.repo.getList(`
            id,
            title,
            handle,
            images(first: 250){
                edges {
                    node {
                        id,url
                    }
                }
            }
            variants(first: 250){
                edges {
                    node {
                        id,
                        title,
                        price{
                            amount
                            currencyCode
                        }

                    }
                }
            }  
        `)
    }
}
