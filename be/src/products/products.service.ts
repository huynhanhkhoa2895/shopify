import { Injectable } from '@nestjs/common';
import ProductRepo from "../repository/Product";

@Injectable()
export class ProductsService {
    constructor(private repo: ProductRepo) {}
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
        `)
    }
}
