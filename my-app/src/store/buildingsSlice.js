// store/buildingsSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const buildingsApi = createApi({
  reducerPath: 'buildingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Building'],
  endpoints: (builder) => ({
    getBuildings: builder.query({
      query: () => '/buildings',
      providesTags: ['Building']
    }),
    addBuilding: builder.mutation({
      query: (newBuilding) => ({
        url: '/buildings',
        method: 'POST',
        body: newBuilding
      }),
      invalidatesTags: ['Building']
    })
  })
});

export const { useGetBuildingsQuery, useAddBuildingMutation } = buildingsApi;