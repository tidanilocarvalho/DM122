import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottonTab from '../components/Tab';
import { colors } from '../styles';

const Stack = createStackNavigator();

const HomeStack = () => {
    <Stack.Navigator>
        <Stack.Screen
            name='HomeScreen'
            component={BottonTab}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
}

export default HomeStack;