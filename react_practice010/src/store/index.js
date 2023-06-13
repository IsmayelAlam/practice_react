import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { albumsApi } from "./api/albumsApis";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export { useFetchAlbumsQuery, useCreateAlbumMutation } from "./api/albumsApis";
