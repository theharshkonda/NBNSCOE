import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import PlacementScreen from '../screens/Plcmnt/Placement';
import EventScreen from '../screens/Event/Event';
import AboutScreen from '../screens/About/About';
import WebScreen from '../screens/Website/Web';  
import GalleryScreen from '../screens/Campus/Gallery';
import CampusGallery from '../screens/Campus/CampusGallery';
import CseGallery from '../screens/Campus/CseGallery';
 

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Hooommmmeeee"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Placement"
        component={PlacementScreen}
        options={{
          title: 'Placements',
          headerShown:true,
          headerStyle:{height:50},
          headerTitleStyle:{marginLeft:-20},
          drawerIcon: ({focused, color, size}) => (
            <Icon name="school" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='Website'
        component={WebScreen}
        options={{
          title: 'Website',
          headerShown:true,
          headerStyle:{height:50},
          headerTitleStyle:{marginLeft:-20},
          drawerIcon: ({focused, color, size}) => (
            <Icon name="earth" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: 'Gallery',
          headerShown:true,
          headerTitleStyle:{marginLeft:-20},
          headerStyle:{height:50},
          drawerIcon: ({focused, color, size}) => (
            <Icon name="images" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          headerShown:true,
          headerTitleStyle:{marginLeft:-20},
          headerStyle:{height:50},
          drawerIcon: ({focused, color, size}) => (
            <Icon name="information-circle" size={18} color={color} />
          ),
        }}
      />

    
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
