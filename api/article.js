import useSWR from 'swr'
import { createAxios } from '/utils/axios'

export function useArticlesApi() {
  return useSWR(createAxios.baseURL + '/articles.json', () => createAxios({
    url: '/articles.json'
  }))
}

export function useRecordApi(type) {
  return useSWR(createAxios.baseURL + `/${type}.json`, () => createAxios({
    url: `/${type}.json`
  }))
}

export function useAddArticle(data) {
  return createAxios({
    url: '/articles',
    method: 'POST',
    data
  })
}