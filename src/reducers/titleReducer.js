export const initialState = {
  title: "OLD TITLE"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    case "RESET_TITLE":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};
