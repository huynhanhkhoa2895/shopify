import {View,FlatList,Text} from "react-native";
import { Image } from "@rneui/themed";
import Categories from "../../../SampleData/categories.json";

type ListItem = {
    id : string | number,
    name : string,
    img : string
}
export default () => {
    const data : Array<ListItem> = Categories;
    const _renderItem = ({item,index} : {item : ListItem,index : number}) => {
        return (
            <View style={{
                width: 100,
                height: 150,
                borderWidth: 1,
                borderColor : "#ccc",
                borderRadius: 6,
                padding : 10,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor : "#fff",
                marginRight : 10
            }}>
                <View style={{width: "100%",height: 90,}}>
                    <Image
                        source={{uri: item.img}}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </View>
                <View style={{width: "100%",height: 40}}>
                    <Text style={{textAlign: "center"}}>{item.name}</Text>
                </View>
            </View>
        );
    }
    return(
        <View style={{padding: 10}}>
            <FlatList
                horizontal
                data={data}
                renderItem={_renderItem}
            />
        </View>
    )
}