import React, { useEffect } from 'react';
import { StyleSheet, Platform, TouchableOpacity, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeTabScreen/Homescreen';
import PlacementScreen from '../screens/Plcmnt/Placement';
import EventScreen from '../screens/Event/Event';
import AboutScreen from '../screens/About/About';
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate(ROUTES.HOME_TAB);
      return true; 
    });
    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === ROUTES.ABOUT_TAB) {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === ROUTES.PLACEMENT_TAB) {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === ROUTES.EVENTS_TAB) {
            iconName = focused ? 'image' : 'image-outline';
          }
          
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeScreen}
        
        options={{
          tabBarLabel: 'Hooommeeee',
          title: 'NBNSCOE',
          headerShown: true,
          headerStyle:{height:50},
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS === 'ios' ? 'menu' : 'menu-outline'}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.PLACEMENT_TAB}
        component={PlacementScreen}
        options={{
          tabBarLabel: 'Placements',
          title: 'Placements',
          headerShown: true,
          headerStyle:{height:50},
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                 name={Platform.OS === 'ios' ? 'menu' : 'menu-outline'}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.EVENTS_TAB}
        component={EventScreen}
        options={{
          tabBarLabel: 'Events & Notices',
          title: 'Events & Notices',
          headerShown: true,
          headerStyle:{height:50},
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS === 'ios' ? 'menu' : 'menu-outline'}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.ABOUT_TAB}
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          title: 'About',
          headerShown: true,
          headerStyle:{height:50},
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS === 'ios' ? 'menu' : 'menu-outline'}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 40,
  },
});
