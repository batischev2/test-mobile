import { createSelector } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Article } from '@/types'

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://astrodev.space/api/affirmations' }),
  endpoints: (builder) => ({
    getArticle: builder.query({
      query: () => `/test`
    }),
  }), 
})

export const selectArticlesResult = articleApi.endpoints.getArticle.select('')

export const selectAllArticles = createSelector(
  selectArticlesResult,
  articlesResult => articlesResult?.data ?? []
)

export const selectArticleById = createSelector(
  selectAllArticles,
  (articleId: number) => articleId,
  (articles: Array<Article>, articleId: number) => articles.find((article: Article) => article.id === articleId)
)

export const { useGetArticleQuery } = articleApi
