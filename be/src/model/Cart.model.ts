import Base from "./Base.model";
import {CartSchema, CartDocSchema, CartDocument} from "../schema/cart.schema";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export default class CartModel extends Base{
    schema = CartSchema
    constructor(@InjectModel(CartDocSchema.name) private model: Model<CartDocument>) {
        super(model);
    }
}