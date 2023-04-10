import { createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const productItems = useSelector(
        (state) => state?.productItems?.productItems
      );
      useEffect(()=>{
           
      },[])
  return (
    <FilterContext.Provider value={{  }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
