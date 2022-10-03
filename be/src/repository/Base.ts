import {Product} from "../entity/Product";
import ApiService from "../Services/api.service";
import {Injectable} from "@nestjs/common";
import getData from "../adapter";
import {Pagination,Edges} from "../entity/GraphqlOption";
type Item = Product | null
type ListData = Array<Item>;

@Injectable()
export default class {
    listData : ListData;
    optionGraph : Pagination = {
        limit : 250
    }
    protected model : string
    constructor(protected apiService: ApiService) {
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
        console.log(`data`,data);
        const listData : ListData = data?.data ? data?.data[this.model].edges.map((item : Edges)=> getData(this.model,item.node)) : null
        return {...data,...{data : listData}};
    }
    get(id : string) : Item {
        return this.listData.find((item : Item)=> item?.id === id) || null
    }
}