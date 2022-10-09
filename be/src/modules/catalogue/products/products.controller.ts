import {Controller, Get, Inject, Injectable, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {getResource} from "../../../adapter";
import {ResourceResponse} from "../../../entity/Common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {AdminDocument,Admin} from "../../../schema/admin"
@Controller('products')
@Injectable()

export class ProductsController {
    constructor(@Inject("SERVICE_PRODUCT")private ps: ProductsService,@InjectModel(Admin.name) private adminModel: Model<AdminDocument>) {    }

    @Get()
    async findAll() : Promise<ResourceResponse>{
        const list : any = await this.ps.list();
        const {status,data,error} = list;
        return getResource({status,data,error})
    }
    @Post("createData")
    async createData() {
        const createdCat = new this.adminModel({name : "test"});
        return createdCat.save();

    }
}