import {StyleProp, Text, TextStyle, View} from "react-native";
import {Product} from "../../Interfaces/Product";
type Props = {
    product: Product,
    style: StyleProp<TextStyle>
}
export default ({product,style} : Props) => {
    const renderPrice = () : string => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0,
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        return formatter.format(product?.price || 0);
    }
    return(
        <Text style={style}>{renderPrice()}</Text>
    )
}