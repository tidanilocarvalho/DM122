import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ProductList from '..';
import style from './style';

const Product = () => {
    return(
        <View style={style.container}>
            <TouchableOpacity>
                <Icon name='ios-checkmark-circle-outline' size={24} style={style.checkIcon}/>
                <Image source={} style={style.image}/>
                <View>
                    <Text style={style.description}>Description</Text>
                    <Text style={style.price}>$10.00</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Product;