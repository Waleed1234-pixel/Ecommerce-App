import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginHorizontal: 12
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle:{
        fontSize: SIZES.xLarge-2,
        fontWeight: '600'
    }
})

export default styles;