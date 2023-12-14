'use client'
import { useArticles } from '/api/article'

function HomePage() {
  const { data: articles, error, isLoading } = useArticles()
  if (isLoading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {articles.data.data.map((article) => (
        <li key={article.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{article.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{article.desc}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{article.type}</p>
            <p className="text-sm leading-6 text-gray-900">{article.createTime}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomePage