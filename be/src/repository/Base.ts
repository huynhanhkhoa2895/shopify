import {Product} from "../entity/Product";

type Item = Product | null
type ListData = Array<Item>

export default class {
    listData : ListData
    getList() : ListData{
        return this.listData;
    }
    get(id : string) : Item {
        return this.listData.find((item : Item)=> item?.id === id) || null
    }
}