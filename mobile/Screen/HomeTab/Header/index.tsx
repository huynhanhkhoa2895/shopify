import {View,Text,StyleSheet} from "react-native";

export default () => {
    return (
        <View style={style.container}>
            <Text>Test Header</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
})