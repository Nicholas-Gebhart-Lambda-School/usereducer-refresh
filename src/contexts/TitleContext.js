import React, { useReducer, createContext } from "react";
import { titleState, titleReducer } from "../reducers/";

export const TitleStateContext = createContext();
export const TitleDispatchContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(titleReducer, titleState);
  return (
    <TitleStateContext.Provider value={state}>
      <TitleDispatchContext.Provider value={dispatch}>
        {children}
      </TitleDispatchContext.Provider>
    </TitleStateContext.Provider>
  );
};
