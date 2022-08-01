import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './Pages/first';
import Second from './Pages/second';


const Stack = createNativeStackNavigator();


function Home( props){
  return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='First' component={First}/>
            <Stack.Screen name='Second' component={Second}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Home;