import React, {useContext} from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { MainContext } from '../Hooks/Context/MainContext';
const HomeScreen = () => {

    const {auth, setAuth} = useContext(MainContext);
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
        onPress={() => setAuth(null)}
      ><Text>Logout</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen