import { ProductId, VariantId} from "./Product";

export type CartId = string

export type CartLineId = string

export type Amount = {
    amount : number,
    currencyCode : "USD" | "VND"
}

export type CartCost = {
    totalAmount: Amount,
    subtotalAmount: Amount,
    totalTaxAmount?: Amount,
    totalDutyAmount?: Amount,
}

export type CartDB = {
    deviceId: string,
    cart: Cart,
}

export type CartItem = {
    lineId?: CartLineId,
    productId: ProductId,
    variantId: VariantId
    qty: number,
}

export type Cart = {
    cartId: CartId,
    cost? : CartCost
    items : CartItem[],
    createdAt : string,
    updatedAt : string,
}