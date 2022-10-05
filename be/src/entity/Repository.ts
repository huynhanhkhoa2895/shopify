import {Item} from "./Common";

export default interface Repository{
    getList(field : string) : Promise<any>;
    get(id : string) : Item;
}