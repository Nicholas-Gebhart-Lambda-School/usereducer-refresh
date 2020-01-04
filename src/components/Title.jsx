import React, { useContext, useState } from "react";
import { TitleContext } from "../contexts/TitleContext.js";

const Title = () => {
  const { state, dispatch } = useContext(TitleContext);
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TITLE", payload: title });
  };

  return [
    <div>{state.title}</div>,
    <button type="submit" onClick={submitHandler}>
      Set Title
    </button>,
    <input name="title" onChange={handleChange} value={title} />
  ];
};

export default Title;
