import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ContextProvider } from './Hooks/Context/MainContext';

import AUth_Navigation from './navigations/AUth_Navigation';

export default function App() {

  global.path = 'http://192.168.1.100:4000/'

  return (
    <ContextProvider>
      <NavigationContainer>
        <AUth_Navigation />
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
