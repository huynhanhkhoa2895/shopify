import {Product} from "../../../Interfaces/Product";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Image } from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';
type Props = {
    product : Product
}
export default ({product} : Props) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const handleNavigate = () => {
        navigation.navigate("ProductDetail",{product});
    }
    return <TouchableOpacity style={style.container} onPress={handleNavigate}>
        <View style={style.imageContainer}>
            <Image
                    source={{
                        uri : product.images[0]
                    }}
                    style={style.img}
                />
        </View>
        <View style={style.textContainer}>
            <Text>{product.name}</Text>
        </View>
    </TouchableOpacity>
}
const style = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        backgroundColor : "#fff",
        overflow: "hidden"
    },
    imageContainer : {
        width : "100%",
        height : "70%",
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 6
    },
    textContainer: {
        width : "100%",
        height: "30%",
        padding : 5
    },
    img : {
        width: 120,
        height: "100%"
    }
})