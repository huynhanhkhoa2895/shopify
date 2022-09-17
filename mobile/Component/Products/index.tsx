import ProductSmall from "./ProductItem/Small"
import ProductData from "../../SampleData/products.json";
import {View, FlatList, StyleSheet} from "react-native";
import {Product} from "../../Interfaces/Product";
import useDimensions from "../../Hooks/useDimensions";
export default () => {
    const {width} = useDimensions();
    const _renderItem = ({item,index} : {item : Product,index : number}) => {
        return (
            <View key={index.toString()+item.id} style={[
                {
                    paddingRight : index % 2 === 0 ? 5 : 0,
                    paddingLeft : index % 2 !== 0 ? 5 : 0,
                    width: (width/2)-10
                },style.item]}>
                <ProductSmall
                    product={item}
                />
            </View>
        )
    }
    return (
        <View>
            <FlatList
                style={style.container}
                data={ProductData}
                renderItem={_renderItem}

            />
            {/*<View style={style.container}>*/}
            {/*    <View style={[{backgroundColor : "red"},style.item]}></View>*/}
            {/*    <View style={[{backgroundColor : "blue"},style.item]}></View>*/}
            {/*</View>*/}
        </View>

    )
}
const style = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex : 1,
        width: "100%"
    },
    item : {
        height : 200,
        marginBottom: 10,
        // padding : 5,
        // flex : 1,
        // alignItems: "center",
        // justifyContent: "center",
    }
})