import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  fetchStatus: false,
  showStatus: false,
};

export const UsersSlice = createSlice({
  name: "UsersSlice",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    setfetchStatus: (state, action) => {
      state.fetchStatus = action.payload;
    },
    showUsers: (state) => {
      state.showStatus = !state.showStatus;
    },
  },
});

export const { addUsers, setfetchStatus, showUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
