import axios, {AxiosRequestHeaders} from "axios"
import {BACKEND_URL,SHOPIFY_ADMIN_API_KEY} from "../config"
export const get = (url : string) => {
    return axios.get(BACKEND_URL + "/" + url,{
        headers : headers()
    });

}

function headers () : AxiosRequestHeaders {
    return {
        "X-Shopify-Access-Token" : SHOPIFY_ADMIN_API_KEY
    }
}