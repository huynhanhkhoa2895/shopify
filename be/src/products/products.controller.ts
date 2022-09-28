import {Controller, Get, Injectable} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
@Injectable()

export class ProductsController {
    constructor(private ps: ProductsService) {    }

    @Get()
    async findAll(){
        const data = await this.ps.list()
        console.log(`this.ps.list()`,data);
        return {
            data
        }
    }
}