import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: (builder) => ({
        getFoodByName: builder.query({
            query: (name) => `/${name}`,
        }),
        getAllMovies: builder.query({
            query: () => `/movies`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFoodByNameQuery, useGetAllMoviesQuery } = moviesApi