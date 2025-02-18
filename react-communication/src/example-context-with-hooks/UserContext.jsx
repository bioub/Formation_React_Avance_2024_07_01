import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext({
  name: '',
  setName: () => {},
});

export function UserProvider({ children }) {
  const [name, setName] = useState('Romain');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  return useContext(UserContext);
}