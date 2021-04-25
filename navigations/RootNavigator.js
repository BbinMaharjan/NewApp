import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import color from '../constants/Color';

import HomeSceen from '../Screens/HomeScreen';

import DetailScreen from '../Screens/DetailScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={HomeSceen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'green'},
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: color.lightRed},
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
