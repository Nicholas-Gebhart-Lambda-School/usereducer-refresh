import React, { useContext, useState } from "react";
import { TitleStateContext, TitleDispatchContext } from "../contexts";

const Title = () => {
  const state = useContext(TitleStateContext);
  const dispatch = useContext(TitleDispatchContext);

  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TITLE", payload: title });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "25%",
        margin: "250px auto"
      }}
    >
      <div style={{ padding: "15px" }}>{state.title}</div>
      <input name="title" onChange={handleChange} value={title} />
      <button
        type="submit"
        onClick={submitHandler}
        style={{ padding: "10px", width: "50%", margin: "15px auto" }}
      >
        Set Title
      </button>
    </div>
  );
};

export default Title;
