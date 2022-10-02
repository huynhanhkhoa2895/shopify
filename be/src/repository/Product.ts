import Base from "./Base";
import {Injectable} from "@nestjs/common";

@Injectable()
export default class extends Base {
    model = "products"
}