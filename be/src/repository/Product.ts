import Base from "./Base";
import {Injectable} from "@nestjs/common";
import ApiService from "../Services/api.service";

@Injectable()
export default class extends Base{
    model = "products"
}