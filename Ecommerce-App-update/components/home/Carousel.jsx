//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import {COLORS} from '../../constants'

// create a component
const Carousel = () => {
    const slides = [
        "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=400",
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={{borderRadius: 15, width: '93%',marginTop: 15}}
            autoplay
            circleLoop/>
        </View>
    );
};

//make this component available to the app
export default Carousel;

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems: 'center'
    }
})