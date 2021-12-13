import React from 'react';
import Home from '../screens/Home/Home'; 
import Login from '../screens/Login/Login';
import Cadastro from '../screens/Cadastro/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}
