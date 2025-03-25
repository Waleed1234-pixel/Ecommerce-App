import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewRivals.style';
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/products/ProductList';

const NewRivals = () => {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name='chevron-back-circle' 
                        size={30} color={COLORS.lightWhite}/>
                    </TouchableOpacity>
                    <Text style={styles.heading}>Products</Text>
                </View>
                <ProductList/>
            </View>
        </SafeAreaView>
    );
};


//make this component available to the app
export default NewRivals;
