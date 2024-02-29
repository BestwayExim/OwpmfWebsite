export const setScrolled = (isScrolled) => ({
  type: "SET_SCROLLED",
  payload: isScrolled,
});

// reducer.js
const initialState = {
  isScrolled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCROLLED":
      return {
        ...state,
        isScrolled: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
