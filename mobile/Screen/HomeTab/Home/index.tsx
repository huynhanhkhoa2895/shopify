import { Text, View, FlatList,SafeAreaView } from 'react-native';
import Slider from "../../../Component/Slider";
import Categories from "./Categories";
import Products from "../../../Component/Products"

export default () => {
    const images = [
        "https://phutunganhem.com/wp-content/uploads/2021/10/nitronvn-1400x630-1.jpg",
        "https://phutunganhem.com/wp-content/uploads/2022/02/Banner-trang-chu-web-phu-tung-anh-em-1.jpg",
        "https://phutunganhem.com/wp-content/uploads/2022/02/Banner-trang-chu-web-phu-tung-anh-em-2.jpg",
        "https://phutunganhem.com/wp-content/uploads/2022/03/5bd4df2d2572ea2cb3632.jpg",
    ]
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={({ name }, index) => index.toString()}
                data={[]}
                ListHeaderComponent={
                    <View>
                        <View>
                            <Slider images={images} />
                        </View>
                        <View>
                            <Categories />
                        </View>
                        <View style={{padding : 10}}>
                            <Text style={{marginBottom : 10}}>Most Popular</Text>
                            <Products />
                        </View>
                    </View>
                }
                renderItem={({ item, index }) => item}
            />
        </SafeAreaView>


    );
}