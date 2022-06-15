import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slide";

export default configureStore({
  reducer: rootReducer,
});
