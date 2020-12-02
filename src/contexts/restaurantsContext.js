import { createContext, useContext } from 'react';

const restaurantsContext = createContext(null);

export const useRestaurantsContext = () => {
  return useContext(restaurantsContext);
};

export default restaurantsContext;
