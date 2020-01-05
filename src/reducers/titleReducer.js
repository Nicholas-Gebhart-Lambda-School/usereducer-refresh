export const initialState = {
  title: "My Title"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};
