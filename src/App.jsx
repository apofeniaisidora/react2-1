import Navbar from './Navbar'
import Home from './Home'
import Contacto from './Contacto'
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'

function App() {

  return (
    <div className='contenedor'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Contacto' element={<Contacto/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
