import Footer from './Footer'
function LayoutPage({ children }) {
  return (
    <>
      <div>Welcome to Next.js!</div>
      {children}
      <Footer />
    </>
  )
}

export default LayoutPage