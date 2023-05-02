import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";
import jobSlice from "./features/job/jobSlice.jsx";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
