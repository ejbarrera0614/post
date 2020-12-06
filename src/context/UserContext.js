import { createContext } from 'react';

const userContext = createContext();

export const UserContextProvider = userContext.Provider;

export default userContext;
