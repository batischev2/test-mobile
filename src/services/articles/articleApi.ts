import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Article {
  id: number;
  description: string,
  title: string
}

interface Media {
  url: string,
  mimetype: string,
  preview_img: string,
  duration: number
}

interface Audio {
  id: number,
  name: string,
  title: string,
  icon: string,
  media: Media,
  paid: boolean
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://astrodev.space/api/affirmations' }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => `/test`,
    }),
  }),
})

export const { useGetArticleQuery } = articleApi