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
        <div class="website-report">
          <p class="website-desc">Designed & Powerd by xuyanzhuqing</p>
          <a class="website-report-link" href="http://beian.miit.gov.cn" target="_blank">
            <img width='20px' src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" class="ali-report-img" />
            <span class="website-report-link-text">沪ICP备2024052162号</span>
          </a>
          <p class="website-desc">Copyright© 2024 xuyanzhuqing blog</p>
        </div>
      </body>
    </html>
  )
}
