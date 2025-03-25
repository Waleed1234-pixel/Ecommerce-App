import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
      },
      searchIcon:{
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: -6
      },
      searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
      },
      searchInput:{
        fontWeight: '700',
        width: '100%',
        paddingHorizontal: SIZES.medium
      },
      searchBtn:{
        width:50,
        padding: 10,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
      }
})

export default styles;