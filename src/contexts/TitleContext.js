import React, { useReducer, createContext } from "react";
import { initialState, reducer } from "../reducers/titleReducer";

export const TitleContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TitleContext.Provider value={{ state, dispatch }}>
      {children}
    </TitleContext.Provider>
  );
};

export default Provider;
