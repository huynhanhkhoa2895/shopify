import {Item} from "./Common";

export type Pagination = {
    limit : number
}
export type Node = Item
export type Edges = {
    node : Node
}