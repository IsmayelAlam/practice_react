import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = userSlice.reducer;
