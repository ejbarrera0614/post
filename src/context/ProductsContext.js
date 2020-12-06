import { createContext } from 'react';

const productsContext = createContext([]);

export const productsContextProvider = productsContext.Provider;
export default productsContext;
