import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUser";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    // fetch users
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // add users
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // remove users
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.data = state.data.filter();
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = userSlice.reducer;
