import React from "react";
import { initialState, reducer } from "../reducers/titleReducer";
import TitleContext from "../contexts/TitleContext";

import Title from "./Title";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <TitleContext.Provider value={{ state, dispatch }}>
      <Title />
    </TitleContext.Provider>
  );
};

export default App;
