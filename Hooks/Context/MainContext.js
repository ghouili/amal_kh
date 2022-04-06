import React, {createContext, useState} from 'react';

const MainContext = createContext();

const ContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(null);

  return (
    <MainContext.Provider  value={{   
            auth,
            setAuth
        }}
    >
        {children}
    </MainContext.Provider>
  )
}

export { ContextProvider, MainContext };