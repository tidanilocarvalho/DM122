import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import style from './style'
import { colors } from './styles'
import BottonTab from './components/Tab'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './routes/route'

const AppECom = () => {
    return (
        <SafeAreaView style={style.container}>
            <NavigationContainer>
                <StatusBar barStyle='light-content' backgroundColor={colors.base}/>
                <BottonTab />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppECom;