import {Inject, Injectable} from "@nestjs/common";
import ApiService from "../Services/api.service";
import {ProductId, VariantId} from "../entity/Product";
import CartModel from "../model/Cart.model";
import {CartDB, CartId, CartLineId} from "../entity/Cart";

const graphqlCart = `
    cart {
          id
          createdAt
          updatedAt
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
    }
`

@Injectable()
export default class CartRepository {
    constructor(protected apiService: ApiService,@Inject("MODEL_CART")protected cartModel: CartModel) {
    }
    createCart(VariantId : VariantId,qty : number = 1){
        return this.apiService.storefront(`
            mutation {
              cartCreate(
                input: {
                  lines: [
                    {
                      quantity: ${qty}
                      merchandiseId: "${VariantId}"
                    }
                  ]
                }
              ){
                ${graphqlCart}
              }
             }
        `)
    }

    updateCart(cartId : CartId,lineId : CartLineId){
        return this.apiService.storefront(`
            mutation {
              cartLinesUpdate(
                cartId: "${cartId}"
                lines: {
                  id: "${lineId}"
                  quantity: 3
                }
              ){
                ${graphqlCart}
              }
             }
        `)
    }

    getLineId(cartId : CartId,variantId : VariantId){
        return this.cartModel.getWithData({"cart.cartId" : cartId,variantId})
    }
    addToDB(cartDB : CartDB){
        return this.cartModel.create(cartDB)
    }
    getAllDB(){
        return this.cartModel.getAll();
    }
}