'use client'
import { useArticlesApi } from '/api/article'
import categories from '../enum/categories'

var categoriesReducer = categories.reduce((acc, curr) => {
  acc[curr.value] = curr.desc
  return acc
}, {})

function HomePage() {
  const { data: articles, error, isLoading } = useArticlesApi()
  if (isLoading) {
    return (
      <div>loading</div>
    )
  }
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {articles?.data.result.map((article) => (
        <li key={article.id} className="flex justify-between gap-x-6 py-5" onClick={() => {
          window.location.replace(`/article/single?id=${article.id}`);
        }}>
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {article.title}
                </button>
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{article.content}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{categoriesReducer[article.category_id]}</p>
            <p className="text-sm leading-6 text-gray-900">{article.created_at}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomePage