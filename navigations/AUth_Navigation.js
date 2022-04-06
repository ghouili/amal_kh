import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainContext } from '../Hooks/Context/MainContext';

const Stack = createStackNavigator();

import Authenticate from '../Screens/Authenticate';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
const AUth_Navigation = ({navigation}) => {

  const { auth } = useContext(MainContext);
  // console.log(auth)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {!auth?
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={Authenticate} />
        </> 
        : 
        <Stack.Screen name="Home" component={HomeScreen} />
      }
      
    </Stack.Navigator>
  )
}

export default AUth_Navigation