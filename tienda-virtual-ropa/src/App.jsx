import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import './css/App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hombre' element={<Home/>}/>
          </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
