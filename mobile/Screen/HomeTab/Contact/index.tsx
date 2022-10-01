import {Text, View, ScrollView, StyleSheet} from "react-native"

export default () => {
    return(
        <ScrollView>
            <View style={style.container}>
                <View style={style.textContainer}>
                    <Text style={style.title}>Shop KC: </Text>
                    <Text>243 Tạ Quang Bửu</Text>
                </View>
                <View style={style.textContainer}>
                    <Text style={style.title}>Số Điện Thoại: </Text>
                    <Text>0335076638</Text>
                </View>
                <View style={style.textContainer}>
                    <Text style={style.title}>Email: </Text>
                    <Text>a8515895@gmail.com</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    container: {
        padding: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        marginBottom : 20
    },
    title: {
        fontWeight: "700",
        fontSize: 14
    }
})