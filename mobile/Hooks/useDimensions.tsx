import { Dimensions } from "react-native";
export default () => {
    const width = Dimensions.get('window').width; //full width
    const height = Dimensions.get('window').height; //full height
    return {
        width,
        height
    }
}