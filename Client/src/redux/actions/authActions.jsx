import axios from "axios";

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/register", userData);
    dispatch({ type: "REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_FAIL", payload: error.response.data.message });
  }
};

// Login User
export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/login", userData);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
