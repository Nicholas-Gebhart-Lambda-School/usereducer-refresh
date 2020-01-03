import React, { useReducer } from "react";
import PostContext from "../reducers/postReducer";

const PostContainer = () => {
  const { state, dispatch } = React.useContext(PostContext);
  return (
    <>
      <div>{state.title}</div>
      <button
        type="submit"
        onClick={() =>
          dispatch({ type: "UPDATE_TITLE", payload: "UPDATED TITLE" })
        }
      >
        UPDATE TITLE
      </button>

      <button
        type="submit"
        onClick={() =>
          dispatch({ type: "RESET_TITLE", payload: "ORIGINAL TITLE" })
        }
      >
        ORIGINAL TITLE
      </button>
    </>
  );
};

export default PostContainer;
