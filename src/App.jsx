import './App.css'
import Home from './component/Home'
import Themes from './component/Theme'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
