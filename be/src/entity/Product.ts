export type ProductImage = {
    id : string;
    height: number;
    width: number;
    altText: string;
    url: string;
}

export type ProductVariant = {
    id : string;
    image: ProductImage;
    product: Product;
    sku: string;
    quantityAvailable: number;
    barcode?: string;
    availableForSale: boolean;
}

export interface Product{
    id : string;
    graphqlId : string;
    name : string;
    handle?: string;
    images? : ProductImage[];
    variants? : ProductVariant[];
}