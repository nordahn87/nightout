import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './components/home'
import Drinks from './components/drinks'
import Contact from './components/contact'
import ScrollToTop from './components/misc/scroll-to-top'

const App = () => {

  return (
    <>
      <Navigation />
      <div className="h-[70px]"></div>
      <ScrollToTop>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
      </ScrollToTop>
      <Footer />
    </>
  )
}

export default App
