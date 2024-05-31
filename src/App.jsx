import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Products></Products>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
