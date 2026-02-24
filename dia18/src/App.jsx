import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {
  const title = "My first React App"
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ]

  return (
    <>
      <Header title={title} links={links} />
      <Main />
      <Footer text="© 2024 My React App. All rights reserved." />
    </>
  )
}

export default App
