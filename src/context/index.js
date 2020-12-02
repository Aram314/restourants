import { createContext, useContext } from 'react';

const filterContext = createContext(null);

export const useFilterContext = () => {
  return useContext(filterContext);
};

export default filterContext;
