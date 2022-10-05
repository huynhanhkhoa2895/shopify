import ApiService from "../Services/api.service";
import {Injectable} from "@nestjs/common";
import getData from "../adapter";
import {Pagination,Edges} from "../entity/GraphqlOption";
import {Item} from "../entity/Common";
import Repository from "../entity/Repository";
type ListData = Array<Item>;

@Injectable()
export default class implements Repository {
    listData : ListData;
    optionGraph : Pagination = {
        limit : 250
    }
    protected model : string
    constructor(protected apiService: ApiService) {
        console.log("Base init",this.apiService);
    }
    async getList(field: string = "id") : Promise<ListData>{
         const data : any = await this.apiService.storefront(`
            {
                `+this.model+` (first: ${this.optionGraph.limit}) {
                  edges {
                    node {
                      `+field+`
                    }
                  } 
                }
            }
        `)
        const listData : any = data?.data ? data?.data[this.model].edges.map((item : Edges)=> getData(this.model,item.node)) : null
        console.log(`listData`,listData);
        return {...data,...{data : listData}};
    }
    get(id : string) : Item {
        return this.listData.find((item : Item)=> item?.id === id) || null
    }
}