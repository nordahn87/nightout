import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Main from './components/main'
import Home from './components/home'
import AboutMe from './components/about-me'
import Contact from './components/contact'
import ScrollToTop from './components/misc/scroll-to-top'

const App = () => {

  return (
    <>
      <Navigation />
      <div className="h-[72px]"></div>
      <ScrollToTop>
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </ScrollToTop>
      <Footer />
    </>
  )
}

export default App
