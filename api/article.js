import useSWR from 'swr'
import { createAxios } from '/utils/axios'

export function useArticlesApi() {
  return useSWR('/articles', () => createAxios({
    url: '/articles'
  }))
}

export function useRecordApi(id) {
  return useSWR('/articles/' + id, () => createAxios({
    url: '/articles/' + id
  }))
}

export function useListCategoriesApi(category) {
  return useSWR(`/articles/list/${category}`, () => createAxios({
    url: `/articles/list/${category}`
  }))
}

export function useAddArticle(data) {
  return createAxios({
    url: '/articles',
    method: 'POST',
    data
  })
}