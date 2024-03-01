import * as React from 'react';
import {SafeAreaView, Text,StatusBar} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {COLORS, ROUTES} from './src/constants';

import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <StatusBar
      backgroundColor='white'
      barStyle="dark-content"/>
      <AuthNavigator />
    </NavigationContainer>
  );
}
