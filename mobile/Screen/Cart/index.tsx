import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import useCart from "../../Hooks/useCart";
import CartItem from "../../Component/Cart/CartItem";
import {css} from "../../config";
import Ionicons from "react-native-vector-icons/Ionicons";
type Props = {
    navigation : any
}
export default ({navigation} : Props) => {
    const {cart} = useCart();

    const handlePress = () => {
        navigation.navigate("Checkout")
    }

    return(
        <SafeAreaView>
            <View style={{flexDirection : "column",height : "100%"}}>
                <View style={{flex : 1}}>
                    <ScrollView>
                        {
                            cart?.items && cart.items.length > 0 ? cart.items.map((cart, i) => (
                                    <CartItem key={cart.id} cart={cart} />
                                ))
                                :
                                <View style={{backgroundColor : "#fff",width : "100%",alignItems : "center",justifyContent : "center",padding : 10}}>
                                    <Text style={{color : "#ccc",fontSize : 24,textAlign : "center"}} >Hiện tại giỏ hàng không có sản phẩm</Text>
                                </View>
                        }
                    </ScrollView>
                </View>

                {
                    cart?.items && cart.items.length > 0 && (
                        <TouchableOpacity style={{
                            flexDirection : "row",
                            height : 50,
                            width : "100%",
                            padding : 5,
                            borderTopColor : "#ccc",
                            backgroundColor : css.color,
                            alignItems : "center",
                            justifyContent: "center"
                        }}
                            onPress={handlePress}
                        >
                            <Text style={{color : "#fff",fontSize : 18}}>Tiếp tục mua hàng</Text>
                            <Ionicons name={"arrow-forward"} size={18}  color={"#fff"} style={{marginLeft : 5}}/>
                        </TouchableOpacity>
                    )
                }

            </View>
        </SafeAreaView>
    )
}