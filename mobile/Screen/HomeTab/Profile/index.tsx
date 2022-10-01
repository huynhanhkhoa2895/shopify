import {StyleSheet, Text,View,ScrollView,SafeAreaView} from "react-native"
import LoginForm from "../../../Component/LoginForm";

export default () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/*<View>*/}
            {/*    <Text>Profile</Text>*/}
            {/*</View>*/}
            <LoginForm />
        </SafeAreaView>
    )
}
const style = StyleSheet.create({})