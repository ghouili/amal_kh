import React, {useContext} from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../Hooks/Context/MainContext';
const HomeScreen = () => {

    const {auth, setChanged} = useContext(MainContext);
    const logout = async () => {
      await AsyncStorage.removeItem('user');
      setChanged('loggedout');
    }
  return (
    <View>
      <Text>homeScreen</Text>
      <Text>homeScreen</Text>
      <Text>homeScreen</Text>
      <Text>homeScreen</Text>
      {auth &&
      <Text>{auth.email}</Text>
      }
      <TouchableOpacity
        onPress={logout}
      ><Text>Logout</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen