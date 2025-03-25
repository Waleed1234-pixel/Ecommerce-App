//import liraries
import React from 'react';
import { Text,View,TouchableOpacity, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, Feather} from '@expo/vector-icons'
import {COLORS,SIZES} from '../constants';
import styles from './search.style';
// create a component
const Search = () => {
    return (
        <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons name="camera-outline" size={SIZES.xxLarge} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput}
                value=""
                placeholder='What are you looking for'/>
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name='search' size={24} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};


//make this component available to the app
export default Search;
