import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";
import jobSlice from "./features/job/jobSlice.jsx";
import allJobsSlice from "./features/allJobs/allJobsSlice.jsx";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
