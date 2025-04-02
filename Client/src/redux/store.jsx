// import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";



export default configureStore({
  reducer: {
    auth:authReducer
  }
})

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
