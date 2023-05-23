import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/screens/Home";

import * as SystemUI from 'expo-system-ui';
import * as React from 'react';
import LandingPage from '../components/screens/LandingPage';
import Filters from '../components/screens/Filters';
import ResultPage from '../components/screens/ResultPage';
import Years from '../components/screens/Years';


SystemUI.setBackgroundColorAsync("black");
const Stack = createNativeStackNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };
const homeStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="LandingPage" component={LandingPage}  options={{ headerShown: false }}/>
      <Stack.Screen name="Filters" component={Filters}  options={{ headerShown: false }}/>
      <Stack.Screen name="ResultPage" component={ResultPage}  options={{ headerShown: false }}/>
      <Stack.Screen name="Years" component={Years}  options={{ headerShown: false }}/>
   



    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default homeStack

