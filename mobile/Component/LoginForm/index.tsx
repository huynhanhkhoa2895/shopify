import {Platform, StyleSheet, View, KeyboardAvoidingView,Text} from "react-native";
import {css} from "../../config";
import {Input,Button} from "@rneui/themed";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";

type FormData = {
    username: string,
    password: string,
    repassword: string,
}

export default () =>{
    const [isLogin,setIsLogin] = useState<boolean>(true)
    const [form,setForm] = useState<FormData>({
        username : '',
        password : '',
        repassword : '',
    })
    const [errForm,setErrForm] = useState<FormData>({
        username : '',
        password : '',
        repassword : '',
    })
    const onChangeText = (value : string,field : string) => {
        setForm((formData : FormData)=>{
            return {...formData,...{[field] : value}}
        })
    }
    const handleSubmit = () => {
        const {username,password,repassword} = form;
        let check : boolean = false;

        if(username === ''){
            setErrForm({...errForm,...{username : "Không thể trống"}})
        }else if(password === ''){
            setErrForm({...errForm,...{password : "Không thể trống"}})
        }else{
            if(!isLogin && password !== repassword){
                setErrForm({...errForm,...{password : "Mật khẩu không trùng",repassword : "Mật khẩu nhập lại không giống"}})
            }
        }
        if(check){

        }

    }
    const renderSignupForm = () => {
        return(
            <>
                <Input
                    placeholder={"Username"}
                    onChangeText={(value)=>onChangeText(value,"username")}
                    value={form.username}
                    leftIcon={<Ionicons name={"person-outline"} size={18} />}
                    errorMessage={errForm.username}
                />
                <Input
                    placeholder={"Password"}
                    onChangeText={(value)=>onChangeText(value,"password")}
                    value={form.password}
                    keyboardType='visible-password'
                    secureTextEntry={true}
                    leftIcon={<Ionicons name={"key-outline"} size={18} />}
                    errorMessage={errForm.password}

                />
                <Input
                    placeholder={"Re-Password"}
                    onChangeText={(value)=>onChangeText(value,"password")}
                    value={form.repassword}
                    keyboardType='visible-password'
                    secureTextEntry={true}
                    leftIcon={<Ionicons name={"key-outline"} size={18} />}
                />
            </>
        )
    }
    const handleChange = () =>{
        setForm({
            username : '',
            password : '',
            repassword : '',
        })
        setErrForm({
            username : '',
            password : '',
            repassword : '',
        })
        setIsLogin(!isLogin)

    }
    return (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={style.container}
                >
                    <View style={style.wrapperContainer}>
                        <Text style={{textAlign: "center",fontSize: 24,fontWeight: "600",marginBottom : 10}}>{isLogin ? "Đăng Nhập" : "Đăng ký"}</Text>
                        <>
                            {
                                isLogin ?
                                    <>
                                        <Input
                                            placeholder={"Username"}
                                            onChangeText={(value)=>onChangeText(value,"username")}
                                            value={form.username}
                                            leftIcon={<Ionicons name={"person-outline"} size={18} />}
                                            errorMessage={errForm.username}

                                        />
                                        <Input
                                            placeholder={"Password"}
                                            onChangeText={(value)=>onChangeText(value,"password")}
                                            value={form.password}
                                            keyboardType='visible-password'
                                            secureTextEntry={true}
                                            leftIcon={<Ionicons name={"key-outline"} size={18} />}
                                            errorMessage={errForm.password}

                                        />
                                    </>
                                    :
                                renderSignupForm()
                            }
                        </>

                        <View style={{flexDirection: isLogin ? "row" : "row-reverse",justifyContent: "space-between"}}>
                            <Button buttonStyle={{backgroundColor : css.color}} title={isLogin ? "Đăng Nhập" : "Đăng Ký"} onPress={handleSubmit} />
                            <Button type="clear" onPress={handleChange} titleStyle={{color: css.color}}>
                                {!isLogin ? <Ionicons name="arrow-back" color={css.color} size={18}/> : <></>}
                                {isLogin ? "Đăng Ký" : "Đăng Nhập"}
                                {isLogin ? <Ionicons name="arrow-forward" color={css.color}  size={18}/> : <></>}

                            </Button>
                        </View>
                    </View>
                </KeyboardAvoidingView>
    );
}
const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : css.color,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "relative"
    },
    wrapperContainer: {
        width: "80%",
        padding: 20,
        backgroundColor : "#fff",
        borderRadius: 10
    }
})