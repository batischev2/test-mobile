import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://astrodev.space/api/affirmations' }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => `/test`
    }),
  }),
})

export const { useGetArticleQuery } = articleApi
