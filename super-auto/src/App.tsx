import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Acceuil from './pages/Acceuil'
import Contact from './pages/Contact'
import Services from './pages/Services.tsx'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes >
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  )
}
