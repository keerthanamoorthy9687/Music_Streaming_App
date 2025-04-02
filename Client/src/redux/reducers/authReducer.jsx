const initialState = { user: null, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return { ...state, error: null };
    case "REGISTER_FAIL":
    case "LOGIN_FAIL":
      return { ...state, error: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
