import {StyleSheet} from 'react-native';
import {COLORS,SIZES} from '../../constants/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    welcomeTxt:(color,top)=>({
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge-5,
        marginTop: top,
        color: color,
        marginHorizontal: 12
  }),
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
    marginTop: 3
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
    // height: '100%',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary
  }
})

export default styles;