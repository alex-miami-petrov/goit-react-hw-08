import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post("/users/signup", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post("/users/login", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authApi.post("/users/logout");

    // clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    // setAuthHeader(persistedToken);
    const { data } = await authApi.get("/users/me");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
