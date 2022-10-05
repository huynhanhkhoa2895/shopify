import {Inject, Injectable} from '@nestjs/common';
import CategoryRepo from "../../../repository/Category";

@Injectable()
export class CategoriesService {
    constructor(@Inject("REPO_CATEGORY")private repo: CategoryRepo) {}
    async list(){
        return await this.repo.getList(`
            id, 
            title,
            handle,
            image{
                id,url
            }
                      
        `)
    }
}
