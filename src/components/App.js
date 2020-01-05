import React from "react";

import { Provider as TitleContextProvider } from "../contexts";
import Title from "./Title";

const App = () => {
  return (
    <TitleContextProvider>
      <Title />
    </TitleContextProvider>
  );
};

export default App;
