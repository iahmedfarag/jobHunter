import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.jsx";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
