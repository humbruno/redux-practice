import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import counterReducer from "./counter-slice";

// THE COMMENTED SECTION BELOW IS HOW YOU WOULD WRITE THE REDUCERS WITH VANILLA REDUX, WITHOUT TOOLKIT
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
