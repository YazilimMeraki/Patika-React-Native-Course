import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/WelcomeScreen';
import MemberSing from './Pages/MemberSing';
import MemberResult from './Pages/MemberResult';


const Stack = createNativeStackNavigator();


function Home(){
  return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false }}>
            <Stack.Screen name='WelcomeScreen' component={Welcome} />
            <Stack.Screen name='MemberSingScreen' component={MemberSing}  />
            <Stack.Screen name='MemberResultScreen' component={MemberResult}  />
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Home;