import {Controller, Get, Inject, Injectable} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {getResource} from "../../../adapter";
import {ResourceResponse} from "../../../entity/Common";

@Controller('products')
@Injectable()

export class ProductsController {
    constructor(@Inject("SERVICE_PRODUCT")private ps: ProductsService) {    }

    @Get()
    async findAll() : Promise<ResourceResponse>{
        const list : any = await this.ps.list();
        const {status,data,error} = list;
        return getResource({status,data,error})
    }
}