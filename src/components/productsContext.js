import { createContext, useContext } from 'react';

export const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);
