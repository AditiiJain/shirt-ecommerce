import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: userInfo,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SET_USER } = userSlice.actions;

export default userSlice.reducer;
