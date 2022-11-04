import {Item} from "./Common";

export type Pagination = {
    limit : number
}
export type Node = Item;

export type ResponseShopify = {
    status : number,
    data : {
        [key : string] : any
    }
}

export type Edges = {
    node : Node
}