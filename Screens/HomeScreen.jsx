import React, {useContext} from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../Hooks/Context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {

    const {auth, setChanged} = useContext(MainContext);
    const logout = async () => {
      await AsyncStorage.removeItem('user');
      setChanged('loggedout');
    }
  return (
    <SafeAreaView style={{marginTop: "10%"}}>
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
    </SafeAreaView>
  )
}

export default HomeScreen