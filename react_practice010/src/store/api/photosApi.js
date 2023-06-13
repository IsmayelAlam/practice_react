import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";

const photosApi = createApi({
  reducerPath: "photos",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),

  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/photos",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),

      createAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
              id: nanoid,
            },
          };
        },
      }),

      deleteAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.userId }];
        },
        query: (album) => {
          return {
            url: `/photos/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useCreateAlbumMutation,
  useDeleteAlbumMutation,
} = photosApi;

export { photosApi };
