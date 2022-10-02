import { Injectable } from '@nestjs/common';
import ProductRepo from "../repository/Product";

@Injectable()
export class ProductsService {
    constructor(private repo: ProductRepo) {}
    async list(field? : string){
        return await this.repo.getList(field)
    }
}
