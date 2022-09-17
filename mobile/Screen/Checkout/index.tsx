import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Platform,
    KeyboardAvoidingView
} from "react-native";
import { Input, Icon } from '@rneui/themed';
import {useState} from "react";
import {css} from "../../config";
import useCart from "../../Hooks/useCart";
import CartItem from "../../Component/Cart/CartItem";
import { Dialog } from "@rneui/themed";
type FormData = {
    name: string;
    address: string;
    phone: string;
};
export default () => {
    const {cart,checkout} = useCart();
    const [visible, setVisible] = useState(false);
    const [form,setForm] = useState<FormData>({
        name : '',
        address : '',
        phone : ''
    })
    const onSubmit = () => {
        let check = true;
        Object.keys(form).some((field: string)=>{
            const item : any = (form as any)[field]
            if(item === ""){
                check = false;
                setVisible(true)
                return true;
            }
        })
        if(check){

        }
    }

    const onChangeText = (value : string,field : string) => {
        setForm((formData : FormData)=>{
            return {...formData,...{[field] : value}}
        })
    }

    return(
        <SafeAreaView>
            <Dialog
                isVisible={visible}
                onBackdropPress={()=>setVisible(false)}
            >
                <Dialog.Title title="Cảnh báo"/>
                <Text>Bạn phải ghi đầy đủ thông tin</Text>
            </Dialog>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={style.container}
            >
                <ScrollView>
                    <View style={{padding : 10,backgroundColor : "#fff"}}>
                        <Input
                            label={"Họ và tên"}
                            onChangeText={(value)=>onChangeText(value,"name")}
                            value={form.name}
                        />
                        <Input
                            label={"Số điện thoại"}
                            onChangeText={(value)=>onChangeText(value,"phone")}
                            value={form.phone}
                            keyboardType='phone-pad'
                        />
                        <Input
                            label={"Địa chỉ"}
                            onChangeText={(value)=>onChangeText(value,"address")}
                            value={form.address}
                        />
                    </View>
                    <View style={{backgroundColor : "#fff",marginTop : 10}}>
                        {
                            cart?.items && cart.items.length > 0 && cart.items.map((cart, i) => (
                                <CartItem key={cart.id} editable={false} cart={cart} />
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={style.footer}>
                    <TouchableOpacity onPress={onSubmit}>
                        <Text style={{color : "#fff",fontSize : 18}}>Xác nhận mua</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container : {
        height: "100%",
        position : "relative"
    },
    footer : {
        position: "absolute",
        bottom: 0,
        left: 0,
        height : 50,
        width : "100%",
        flex : 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor : css.color,
        color: "#fff"
    }
})