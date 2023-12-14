import useSWR from 'swr'
import { createAxios } from '/utils/axios'

export function useArticles() {
  return useSWR(createAxios.baseURL + '/articles.json', () => createAxios({
    url: '/articles.json'
  }))
}

export function useAddArticle(data) {
  return createAxios({
    url: '/articles',
    method: 'POST',
    data
  })
}