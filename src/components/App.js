import React from "react";
import PostContext, { initialState, reducer } from "../reducers/postReducer";

import PostContainer from "./PostContainer";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <PostContext.Provider value={{ state, dispatch }}>
        <PostContainer />
      </PostContext.Provider>
    </>
  );
};

export default App;
