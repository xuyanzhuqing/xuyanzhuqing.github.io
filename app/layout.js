import '/styles/globals.css'
import Layout from '/components/layout'

export const metadata = {
  title: 'Michael\'s blog',
  description: 'just record',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
