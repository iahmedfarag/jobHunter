import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios.js";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage.js";

// ! initialState
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

// ! registerUser
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// ! loginUser
export const loginUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// ! userSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ! toggle sidebar
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    // ! logout func
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      state.isLogoutDropdownOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    // ! registerUser
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello There ${user.name}`, { autoClose: 2000 });
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error({ payload }, { autoClose: 2000 });
    },
    // ! loginUser
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome Back ${user.name}`, { autoClose: 2000 });
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, { autoClose: 2000 });
    },
  },
});

export const { toggleSidebar, toggleLogoutDropdown, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
