import { createContext, useState } from "react";

const INITIAL_STATE = {
  address: "DEFAULT ADDRESS"
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthProvider = ({ children }) => {
  const [ address, setAddress ] = useState(INITIAL_STATE.address) 

  return (
    <AuthContext.Provider value={{ address }}>
      { children }
    </AuthContext.Provider>
  )
}