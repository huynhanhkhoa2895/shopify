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
    constructor(protected apiService: ApiService,@Inject("MODEL_CART")public cartModel: CartModel) {
    }

    getCartFromShopify(cartId: CartId){
        return this.apiService.storefront(`
            query {
                  cart(
                    id: "${cartId}"
                  ) {
            id
            createdAt
            updatedAt
            lines(first: 250) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                    }
                  }
                  attributes {
                    key
                    value
                  }
                }
              }
            }
            attributes {
              key
              value
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
            buyerIdentity {
              email
              phone
              customer {
                id
              }
              countryCode
            }
          }
        }
        `)
    }

    createCartFromShopify(VariantId : VariantId){
        return this.apiService.storefront(`
            mutation {
              cartCreate(
                input: {
                  lines: [
                    {
                      quantity: 1
                      merchandiseId: "${VariantId}"
                    }
                  ]
                }
              ){
                ${graphqlCart}
              }
             }
        `).catch((err : any)=>{
            throw(err)
        });
    }

    updateCustomerCartFromShopify(cartId: CartId,param : {email : string,phone : string}){
        return this.apiService.storefront(`
            cartBuyerIdentityUpdate(
                cartId: "${cartId}"
                buyerIdentity: {
                  email: "${param.email}"
                  phone: "${param.phone}"
                  countryCode: VN
                }
              ) {
                cart {
                  id
                  buyerIdentity {
                    email
                    phone
                    countryCode
                  }
                }
              }
        `).catch((err : any)=>{
            throw(err)
        });
    }

    updateLineCartFromShopify(cartId: CartId,lineId : CartLineId,qty : number = 1){
        return this.apiService.storefront(`
            mutation {
                  cartLinesUpdate(
                        cartId: "${cartId}"
                              lines: {
                                  quantity: ${qty}
                                  id: "${lineId}"
                              }
                          
                  ){
                    ${graphqlCart}
                  }
             }
        `).catch((err : any)=>{
            throw(err)
        });
    }


    getLineId(cartId : CartId,variantId : VariantId){
        return this.cartModel.getWithData({"cart.cartId" : cartId,variantId})
    }
}