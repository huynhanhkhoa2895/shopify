import {Product} from "../entity/Product";
import {Edges} from "../entity/GraphqlOption";
import {Category} from "../entity/Category";
import {ResourceResponse} from "../entity/Common";

function getEdges(edges : Edges[]){
    return edges.map((edge : Edges)=> edge.node)
}

export function getResource(response : ResourceResponse ) : ResourceResponse{
    if(response.data == null) response.data = null;
    if(response.error == null) response.error = null;
    return {...response,...{message : response.status === 1 ? "SUCCESS" : "ERROR"}}
}

export default function getData(model : string, item : any){
    switch (model) {
        case "products":
            const product : Product = {
                ...item,
                id : item.id.split("/")[4],
                graphqlId: item.id,
                name : item.title || item.name,
                images : getEdges(item.images.edges),
                variants: getEdges(item.variants.edges),
            }
            return product
        case "category":case"collections":
            const category : Category = {
                ...item,
                id : item.id.split("/")[4],
                graphqlId: item.id,
                name : item.title || item.name,
            }
            return category
        default:
            return item
    }
}
