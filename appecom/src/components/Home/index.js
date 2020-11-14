import React from 'react';
import { Text, ScrollView } from 'react-native';
import style from './style';

const Home = () => {
    return(
        <ScrollView style={style.container}>
            <Text>Home - DC</Text>
        </ScrollView>
    );
}

export default Home;