import { createSlice } from "@reduxjs/toolkit";
import { webinarSamples } from "../constants/data";

/**
 * Creating and slice for webinar with constant initial values
 */
const webinarSlice = createSlice({
  name: "webinars",
  initialState: {
    webinars: webinarSamples,
  },
  reducers: {
    createWebinar: (state, action) => {
      state.webinars.unshift(action.payload);
    },
    updateWebinar: (state, action) => {
      const { id, data } = action.payload;
      const index = state.webinars.findIndex((webinar) => webinar.id === id);
      if (index !== -1) {
        state.webinars[index] = { ...state.webinars[index], ...data };
      }
    },
    deleteWebinar: (state, action) => {
      const id = action.payload;
      state.webinars = state.webinars.filter((webinar) => webinar.id !== id);
    },
  },
});

export const { createWebinar, updateWebinar, deleteWebinar } =
  webinarSlice.actions;

export default webinarSlice.reducer;
