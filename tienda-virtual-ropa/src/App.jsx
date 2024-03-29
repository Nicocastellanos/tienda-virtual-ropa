import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import './css/App.css'
import Footer from './components/Footer'
import Men from './pages/Men'
import Women from './pages/Women'

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hombre' element={<Men/>}/>
            <Route path='/mujer' element={<Women/>}/>
          </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
