import useSWR from 'swr'
import { createAxios } from '/utils/axios'

export function useArticles() {
  return useSWR(createAxios.baseURL + '/articles', () => createAxios({
    url: '/articles'
  }))
}