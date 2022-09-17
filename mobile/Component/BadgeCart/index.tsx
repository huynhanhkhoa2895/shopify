import Ionicons from "react-native-vector-icons/Ionicons";
import {Badge} from "@rneui/themed";
import {TouchableOpacity} from "react-native";
import * as React from "react";
import useCart from "../../Hooks/useCart";

export default ({navigation} : any) => {
    const {getCartLength} = useCart()

    return     <TouchableOpacity onPress={()=>navigation.push("Cart")}>
        <Ionicons name={"cart"} size={22} color={"#fff"}  />
        <Badge
            status="error"
            value={getCartLength()}
            containerStyle={{ position: 'absolute', top: -10, left: 10 }}
        />
    </TouchableOpacity>
}