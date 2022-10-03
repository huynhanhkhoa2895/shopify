import {Product} from "../entity/Product";

export default function getData(model : string, item : any){
    switch (model) {
        case "products":
            const product : Product = {
                ...item,
                id : item.id.split("/")[4],
                graphqlId: item.id,
                name : item.title || item.name,
                images : item.images
            }
            return product
        default:
            return item
    }
}
