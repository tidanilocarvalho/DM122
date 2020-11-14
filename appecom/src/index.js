import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import style from './style'
import { colors } from './styles'

const AppECom = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.base}/>
        </SafeAreaView>
    );
}

export default AppECom;