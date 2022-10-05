import {Image} from "./Common";
import {Product} from "./Product";

export interface Category{
    id : string;
    graphqlId : string;
    name : string;
    handle?: string;
    images? : Image[];
    onlineStoreUrl? : string;
    description? : string;
    products? : Product[];
}