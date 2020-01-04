import React from "react";
import TitleContext from "../contexts/TitleContext.js";

const Title = () => {
  const { state, dispatch } = React.useContext(TitleContext);
  const [title, setTitle] = React.useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };
  return [
    <div>{state.title}</div>,
    <button
      type="submit"
      onClick={e => {
        e.preventDefault();
        dispatch({ type: "UPDATE_TITLE", payload: title });
      }}
    >
      UPDATE TITLE
    </button>,
    <input name="title" onChange={handleChange} value={title} />
  ];
};

export default Title;
