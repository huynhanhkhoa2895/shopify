
export interface Product {
    id : number | string,
    product_id : string,
    category_id : number | string,
    name : string,
    images : Array<string>,
    sku : string,
    price : number,
    brand? : string,
    description? : string,
    origin? : string,
    tags? : Array<string>
}