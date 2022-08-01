import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './Pages/Details';
import Product from './Pages/Product';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="ProductPage" component={Product} />
                <Stack.Screen name="DetailPage" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;