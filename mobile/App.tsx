import "./rn-polyfill-depricated-proptypes"
import HomeTab from "./Screen/HomeTab";
import Cart from "./Screen/Cart";
import {TouchableOpacity} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductDetail from "./Screen/Product"
import * as React from "react";
import {css} from "./config";
import { Badge } from "@rneui/themed";
import useCart from "./Hooks/useCart";
import store from "./reducer"
import { Provider } from 'react-redux'
import BadgeCart from "./Component/BadgeCart";
import Checkout from "./Screen/Checkout";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={"HomeTab"}
                        component={HomeTab}
                        options={({navigation})=>({
                            headerStyle : {backgroundColor : css.color},
                            headerTintColor: '#fff',
                            // headerRight : () => <Ionicons name={"cart"} size={22} color={"#fff"} onPress={()=  >navigation.push("Cart")}  />
                            headerRight : () => <BadgeCart navigation={navigation} />
                        })}
                    />
                    <Stack.Screen name={"Cart"} options={({navigation})=>({
                        headerStyle : {backgroundColor : css.color},
                        headerTintColor: '#fff',
                        headerTitle: "Giỏ Hàng",
                        headerBackTitle : "",
                        headerRight : () => <BadgeCart navigation={navigation} />
                    })} component={Cart} />
                    <Stack.Screen name={"Checkout"} options={({navigation})=>({
                        headerStyle : {backgroundColor : css.color},
                        headerTintColor: '#fff',
                        headerTitle: "Đặt hàng",
                        headerBackTitle : "",
                        headerRight : () => <BadgeCart navigation={navigation} />
                    })} component={Checkout} />
                    <Stack.Screen name={"ProductDetail"} options={({navigation})=>({
                        headerStyle : {backgroundColor : css.color},
                        headerTintColor: '#fff',
                        headerTitle: "Sản Phẩm",
                        headerBackTitle : "",
                        headerRight : () => <BadgeCart navigation={navigation} />
                    })} component={ProductDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>


    );
}

