import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {CartId, Cart as ICart, CartLineId} from "../entity/Cart";
import {ProductId, VariantId} from "../entity/Product";

export type CartDocument = CartItem & Document;

@Schema({collection : "cartItem"})
export class CartItem {
    @Prop()
    cartId: CartId;

    @Prop()
    lineId: CartLineId;

    @Prop()
    productId: ProductId;

    @Prop()
    variantId: VariantId;

    @Prop({type : Number})
    qty: number;
}

export const CartSchema = SchemaFactory.createForClass(CartItem);
