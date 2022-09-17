import {Product} from "../../Interfaces/Product";
import {View,SafeAreaView,Text,ScrollView} from "react-native";
import Slide from "../../Component/Slider";
import {useFocusEffect} from '@react-navigation/native';
import {useCallback,useState} from "react";
import {css} from "../../config";
import { Button } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import useCart from "../../Hooks/useCart";
import ProductPrice from "../../Component/ProductPrice";
export default ({route} : any) => {
    // const product : Product
    const {addToCart} = useCart()
    const [product,setProduct] = useState<Product>(route?.params?.product)
    useFocusEffect(
        useCallback(()=>{
            setProduct(route?.params?.product)
        },[route?.params?.product])
    )
    const renderPrice = () : string => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0,
        });
        return formatter.format(product?.price || 0);
    }
    const handleAddToCart = () => {
        addToCart(product);
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Slide
                        auto={false}
                        images={product?.images || []}
                    />
                </View>
                <View style={{paddingLeft : 10,paddingRight : 10,marginTop : 20}}>
                    <Text style={{fontSize: 24}}>{product?.name || ""}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex : 1,
                    width: "100%",
                    paddingLeft : 10,
                    paddingRight : 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop : 10}}>
                    <ProductPrice product={product} style={{color: css.color,fontSize : 18}} />
                    <Button type="solid" onPress={handleAddToCart} buttonStyle={{backgroundColor : css.color}}>
                        Mua hàng
                        <Ionicons name={"cart"} size={18}  color={"#fff"} style={{marginLeft : 5,marginTop: 5}} />
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}