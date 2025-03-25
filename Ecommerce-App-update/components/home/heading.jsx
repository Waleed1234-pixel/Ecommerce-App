import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './heading.style';
import {Ionicons} from '@expo/vector-icons';
import {COLORS} from '../../constants';
import { useNavigation } from '@react-navigation/native';

// create a component
const Heading = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    New Rivals
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}>
                    <Ionicons name='ios-grid' size={24} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default Heading;
