import {Product} from "../entity/Product";
import ApiService from "../Services/api.service";
import {Injectable} from "@nestjs/common";
import getData from "../adapter";
type Item = Product | null
type ListData = Array<Item>;
type Edges = {
    node : object
}
@Injectable()
export default class {
    listData : ListData;
    protected model : string
    constructor(protected apiService: ApiService) {
    }
    async getList(field: string = "id") : Promise<ListData>{
         const data : any = await this.apiService.storefront(`
            {
                `+this.model+` (first: 250) {
                  edges {
                    node {
                      `+field+`
                    }
                  }
                }
            }
        `)
        const listData : ListData = data.body?.data[this.model].edges.map((item : Edges)=> getData(this.model,item.node))
        return listData;
    }
    get(id : string) : Item {
        return this.listData.find((item : Item)=> item?.id === id) || null
    }
}