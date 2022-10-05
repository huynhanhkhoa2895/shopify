import {Controller, Get, Inject, Injectable} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {ResourceResponse} from "../../../entity/Common";
import {getResource} from "../../../adapter";

@Controller('categories')
@Injectable()

export class CategoriesController {
    constructor(@Inject("SERVICE_CATEGORY")private cs: CategoriesService) {    }

    @Get()
    async findAll() : Promise<ResourceResponse>{
        const list : any = await this.cs.list();
        const {status,data,error} = list;
        return getResource({status,data,error})
    }

}
