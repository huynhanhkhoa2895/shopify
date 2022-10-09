import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {CartId,Cart as ICart} from "../entity/Cart";

export type CartDocument = CartDocSchema & Document;

@Schema({collection : "cart"})
export class CartDocSchema {
    @Prop()
    deviceId: string;

    @Prop({
        type : Object
    })
    cart: ICart;
}

export const CartSchema = SchemaFactory.createForClass(CartDocSchema);
