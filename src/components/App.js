import React from "react";

import TitleContextProvider from "../contexts/TitleContext";
import Title from "./Title";

const App = () => {
  return (
    <TitleContextProvider>
      <Title />
    </TitleContextProvider>
  );
};

export default App;
