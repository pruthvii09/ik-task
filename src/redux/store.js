import { configureStore } from "@reduxjs/toolkit";
import webinarReducer from "./webinarSlice";

const store = configureStore({
  reducer: {
    webinars: webinarReducer,
  },
});

export default store;
