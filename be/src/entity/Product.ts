import {Image} from "./Common";

export type ProductId = string;
export type VariantId = string;

export type ProductVariant = {
    id : VariantId;
    image: Image;
    product: Product;
    sku: string;
    quantityAvailable: number;
    barcode?: string;
    availableForSale: boolean;
}

export interface Product{
    id : ProductId;
    name : string;
    handle?: string;
    images? : Image[];
    variants? : ProductVariant[];
}