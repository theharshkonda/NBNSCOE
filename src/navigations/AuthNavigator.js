import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { ImageBackground,BackHandler } from 'react-native';
import PlacementScreen from '../screens/Plcmnt/Placement';
import EventScreen from '../screens/Event/Event';
import AboutScreen from '../screens/About/About';
import WebScreen from '../screens/Website/Web';
import CSEScreen from '../screens/Departements/CseScreen';
import EntcScreen from '../screens/Departements/EntcScreen';
import MechScreen from '../screens/Departements/MechScreen';
import ElectScreen from '../screens/Departements/ElectScreen';
import CivilScreen from '../screens/Departements/CivilScreen';
import GSEScreen from '../screens/Departements/GeneralScience';
import CampusGallery from '../screens/Campus/CampusGallery';
import GseGallery from '../screens/Campus/GseGallery';
import CseGallery from '../screens/Campus/CseGallery';
import MechGallery from '../screens/Campus/MechGallery';
import ElectGallery from '../screens/Campus/ElectGallery';
import CivilGallery from '../screens/Campus/CivilGallery';
import EntcGallery from '../screens/Campus/EntcGallery';
import GalleryScreen from '../screens/Campus/Gallery';
import EventGallery from '../screens/Campus/EventGallery';

const Stack = createStackNavigator();

function AuthNavigator() {
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate(ROUTES.HOME_TAB);
      return true; 
    });
    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SPLASH}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name={ROUTES.PLACEMENT}
      component={PlacementScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
        name={ROUTES.EVENTS}
        component={EventScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ABOUT}
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.WEBSITE}
        component={WebScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name={ROUTES.GSE}
      component={GSEScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:50}}}/>
      <Stack.Screen
      name={ROUTES.CSE}
      component={CSEScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.ENTC}
      component={EntcScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.MECH}
      component={MechScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.ELECT}
      component={ElectScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.CIVIL}
      component={CivilScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      

      <Stack.Screen
      name={ROUTES.CAMPUS}
      component={CampusGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:50}}}/>
      <Stack.Screen
      name={ROUTES.GSEDEPT}
      component={GseGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.CSEDEPT}
      component={CseGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.MECHDEPT}
      component={MechGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.ELECTDEPT}
      component={ElectGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.CIVILDEPT}
      component={CivilGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.ENTCDEPT}
      component={EntcGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.GALLERY}
      component={GalleryScreen}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
      <Stack.Screen
      name={ROUTES.EVENTGALLERY}
      component={EventGallery}
      options={{headerTitleStyle:{marginLeft:-21},headerStyle:{height:45}}}/>
    </Stack.Navigator>
  );
}

function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const splashTimeout = setTimeout(() => {
      // Navigate to the Login screen after the delay
      navigation.navigate(ROUTES.HOME);
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <ImageBackground style={{ flex: 1, alignContent:'center' }} source={require('../assets/images/Splash.png')}
    
    /> 
    
  );
}

export default AuthNavigator;
