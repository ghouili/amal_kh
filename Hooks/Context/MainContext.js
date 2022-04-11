import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainContext = createContext();

const ContextProvider = ({ children }) => {

  const [auth, setAuth] = useState(null);
  const [changed, setChanged] = useState(null);

  useEffect( async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    jsonValue != null ? JSON.parse(jsonValue) : null;
    setAuth(jsonValue);
  }, [changed])
  

  return (
    <MainContext.Provider  value={{   
            auth,
            setChanged,
            setAuth
        }}
    >
        {children}
    </MainContext.Provider>
  )
}

export { ContextProvider, MainContext };