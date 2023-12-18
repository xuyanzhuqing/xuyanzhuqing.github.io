'use client'
import { useRef } from 'react'
import Script from 'next/script'

function Article({ delta }) {
  const editorRef = useRef(null)

  return (
    <>
      <div ref={editorRef} style={{ 'minHeight': '18rem' }}></div>
      <Script src="https://cdn.quilljs.com/1.3.6/quill.js" onReady={() => {
        const quill = new Quill(editorRef.current);
        quill.setContents(delta)
      }}></Script >
    </>
  )
}

export default Article