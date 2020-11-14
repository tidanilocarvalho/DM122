import React from 'react';
import { Text, ScrollView } from 'react-native';
import style from './style';
import Header from '../Header'

const Home = () => {
    return(
        <>
            <Header />
            <ScrollView style={style.container}>
                <Text>Home - DC</Text>
            </ScrollView>
        </>
    );
}

export default Home;