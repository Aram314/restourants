import { createContext, useContext } from 'react';

const menuContext = createContext(null);

export const useMenuContext = () => {
  return useContext(menuContext);
};

export default menuContext;
