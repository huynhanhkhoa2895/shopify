import {Image, ListItem} from "@rneui/themed";
import {TextInput, View,Text} from "react-native";
import ProductPrice from "../../ProductPrice";
import {css} from "../../../config";
import Ionicons from "react-native-vector-icons/Ionicons";
import {CartItem} from "../../../Interfaces/Cart";
import useCart from "../../../Hooks/useCart";
import {Product} from "../../../Interfaces/Product";
import {useMemo} from "react";

export default ({cart,editable = true} : {cart : CartItem,editable? : boolean}) => {
    const {addToCart,updateToCart} = useCart();

    const handleClick = (type : string = "add",product : Product,qty : number) => {
        switch (type){
            case "add":
                addToCart(product,qty)
                break;
            default:
                updateToCart(product,qty);
        }
    }
    const renderItem = useMemo(()=>{
        return(
            <>
                <Image
                    source={{uri : cart.product.images[0]}}
                    style={{
                        height : 70,
                        width : 70
                    }}
                />
                <ListItem.Content style={{padding : 10}}>
                    <ListItem.Title>{cart.product.name}</ListItem.Title>
                    <ListItem.Subtitle style={{
                        marginTop : 10,

                    }}>
                        <View style={{
                            // flex : 1,
                            flexDirection : "row",
                            flexWrap : "nowrap",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width : "100%",
                            // backgroundColor: "blue",

                        }}>
                            <ProductPrice product={cart.product} style={{color: css.color,fontSize : 18}} />
                            <View style={{
                                flexDirection : "row",
                            }}>
                                {
                                    editable ? (
                                        <View style={{
                                            flexDirection : "row",
                                            borderWidth : 1,
                                            borderColor : "#ccc",
                                            width : 110,}}>
                                            <Ionicons
                                                name={"add"} size={18}
                                                style={{padding: 5}}
                                                onPress={()=>handleClick("add",cart.product,1)}
                                            />
                                            <TextInput style={{
                                                width : 50,
                                                borderLeftWidth : 1,
                                                borderRightWidth : 1,
                                                borderLeftColor : "#ccc",
                                                borderRightColor : "#ccc",
                                                // height: "100%"
                                            }} textAlign={"center"}
                                                       keyboardType={"number-pad"}
                                                       defaultValue={cart.qty.toString()}
                                            />
                                            <Ionicons
                                                style={{padding: 5}}
                                                name={"remove"} size={18}
                                                onPress={()=>handleClick("update",cart.product,cart.qty-1)}
                                            />
                                        </View>
                                    )
                                        :
                                        (
                                            <Text>x{cart.qty.toString()}</Text>
                                        )
                                }


                            </View>
                        </View>
                    </ListItem.Subtitle>
                </ListItem.Content>
            </>

        )
    },[cart])
    return(
        <ListItem bottomDivider>
            {renderItem}
        </ListItem>
    )
}