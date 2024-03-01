'use client'
import { useRef } from 'react'
import { useRecordApi } from '/api/article'
import { useSearchParams } from 'next/navigation';
import Script from 'next/script'

function ArticlePage() {
  const params = useSearchParams()
  const id = params.get('id')
  let editor = useRef(null)
  const { data, error, isLoading } = useRecordApi(id)
  if (isLoading) {
    return (
      <div>loading</div>
    )
  }
  const article = data.data.result[0]

  if (article) {
    return <>
      <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
      <div ref={editor} style={{ 'minHeight': '18rem' }}></div>
      <Script src="https://cdn.quilljs.com/1.3.6/quill.js" onReady={() => {
        const quill = new Quill(editor.current, {
          modules: {
            toolbar: null
          },
          theme: 'snow',
        })
        quill.enable(false)
        quill.setContents(JSON.parse(article.content))
      }}></Script >
    </>
  } else {
    return <div>
      哦豁，文章找不到了
    </div>
  }
}

export default ArticlePage