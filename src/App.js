import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header/Header'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Locations from './pages/Locations'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/:name' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
