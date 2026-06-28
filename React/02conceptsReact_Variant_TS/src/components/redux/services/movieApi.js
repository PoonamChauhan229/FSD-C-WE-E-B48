import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie
// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6a361c63766b831960f8ef2e.mockapi.io/movie/' }),
  endpoints: (builder) => ({
    // query for get methods
    getMovies: builder.query({
      query: () => `movie`,
    }),
     getSingleMovies: builder.query({
      query: (id) => `movie/${id}`,
    }),
    // any sort of change
    deleteMovies: builder.mutation({
      query: (id) => ({
        url:`movie/${id}`,
        method:"DELETE"
      }),
    }),
    addMovies: builder.mutation({
      query: (movie) => ({
        url:`movie`,
        method:"POST",
        body:movie
      }),
    }),
    updateMovies: builder.mutation({
    query: ({ id, movie }) => ({
      url: `movie/${id}`,
      method: "PUT",
      body: movie,
  }),
}),
    

  }),
})

// Export hooks for usage in functional components, which are 
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery,useGetSingleMoviesQuery,useDeleteMoviesMutation ,useAddMoviesMutation,useUpdateMoviesMutation} = movieApi
// use keywords     