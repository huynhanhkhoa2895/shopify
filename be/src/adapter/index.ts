import {Product} from "../entity/Product";
import {Edges} from "../entity/GraphqlOption";
import {Category} from "../entity/Category";
import {ResourceResponse} from "../entity/Common";
import {Cart, CartItem} from "../entity/Cart";

function getEdges(edges : Edges[]){
    return edges.map((edge : Edges)=> {
        const item : any = edge.node
        return {
            ...item,
            ...{
                id : item?.id,
                graphqlId: item?.id,
            }
        }
    })
}

export function getResource(response : ResourceResponse ) : ResourceResponse{
    if(response.data == null) response.data = null;
    if(response.error == null) response.error = null;
    return {...response,...{message : response.status === 1 ? "SUCCESS" : "ERROR"}}
}

export default function getData(model : string, item : any,attrAdditionnal?: any){
    switch (model) {
        case "products":
            const product : Product = {
                ...item,
                id : item.id,
                name : item.title || item.name,
                images : getEdges(item.images.edges),
                variants: getEdges(item.variants.edges),
            }
            return product
        case "category":case"collections":
            const category : Category = {
                ...item,
                id : item.id,
                name : item.title || item.name,
            }
            return category
        case "cart":
            const lines = getEdges(item.lines.edges);
            const cartItems : CartItem[]= lines.map((line)=>({
                lineId: line.graphqlId,
                productId : attrAdditionnal?.productId,
                variantId : attrAdditionnal?.variantId,
                qty: line.quantity
            }))
            const cart : Cart = {
                cartId: item.id,
                cost: item.cost,
                items : cartItems,
                createdAt : item.createdAt,
                updatedAt : item.updatedAt
            }
            return cart
        default:
            return item
    }
}
