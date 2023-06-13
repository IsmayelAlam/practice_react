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
        //    providesTags: (result, error, user) => {
        //      return [{ type: "Photo", id: user.id }];
        //    },
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),

      addPhoto: builder.mutation({
        //    invalidatesTags: (result, error, user) => {
        //      return [{ type: "Photo", id: user.id }];
        //    },
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.urlLoremFlickr({
                category: "abstract",
                height: 150,
                width: 150,
              }),
              id: nanoid,
            },
          };
        },
      }),

      deletePhoto: builder.mutation({
        //    invalidatesTags: (result, error, photo) => {
        //      return [{ type: "Photo", id: photo.userId }];
        //    },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;

export { photosApi };
