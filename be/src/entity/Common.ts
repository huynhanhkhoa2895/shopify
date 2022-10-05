import {Product} from "./Product";
import {Category} from "./Category";

export type Item = Product | Category | null
export type Image = {
    id : string;
    height: number;
    width: number;
    altText: string;
    url: string;
}
export type ResourceResponse = {
    status : number,
    data : object | null,
    message? : string | null,
    error : object | null
}