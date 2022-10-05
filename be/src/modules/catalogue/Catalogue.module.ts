import { Module } from '@nestjs/common';
import {ProductsController} from "./products/products.controller";
import {CategoriesController} from "./categories/categories.controller";
import {ProductsService} from "./products/products.service";
import ProductRepository from "../../repository/Product";
import {CategoriesService} from "./categories/categories.service";
import CategoryRepository from "../../repository/Category";
@Module({
    controllers: [ProductsController,CategoriesController],
    providers: [
        {
            provide: "SERVICE_PRODUCT",
            useClass: ProductsService
        },
        {
            provide: "REPO_PRODUCT",
            useClass: ProductRepository
        },
        {
            provide: "SERVICE_CATEGORY",
            useClass: CategoriesService
        },
        {
            provide: "REPO_CATEGORY",
            useClass: CategoryRepository
        },
    ],
    // exports: [ProductsService,ProductRepository,CategoriesService,CategoryRepository],
})
export class CatalogueModule {}