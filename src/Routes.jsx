import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Page } from './Page';
import Auth from './Auth';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="page"
          component={Page}
        />
        <Stack.Screen
          name="auth"
          component={Auth}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}