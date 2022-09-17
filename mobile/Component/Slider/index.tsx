import {View,Text,StyleSheet} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import {useRef} from "react";
import useDimensions from "../../Hooks/useDimensions";
import { Image } from '@rneui/themed';

type Props = {
    images : Array<any>;
    loop? : boolean,
    auto? : boolean,
}

export default ({images,loop = true,auto = true} : Props) => {
    const {width} = useDimensions();
    const c = useRef(null);
    const _renderItem = ({item , index} : {item : any, index : number}) => {
        return(
            <View style={{
                flex: 1,
                width,
                height: "100%"
            }}>
                <Image
                    key={index}
                    containerStyle={styles.item}
                    source={{
                        uri : item
                    }}
                />
            </View>


        )
    }
    return(
        <View>
            <Carousel
                loop={loop}
                width={width}
                height={width/2}
                data={images}
                autoPlay={auto}
                renderItem={_renderItem}
                scrollAnimationDuration={1000}

            />
        </View>
    )
}
const styles = StyleSheet.create({

    item: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain'
    },
});