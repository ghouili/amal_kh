import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            
            // headerTransparent: true,
            // headerShown: false,
        }}
    >
        <Drawer.Screen name='Home' component={HomeScreen}  />
        <Drawer.Screen name='Details' component={DetailsScreen}  />
    </Drawer.Navigator>
  )
}

export default DrawerNav