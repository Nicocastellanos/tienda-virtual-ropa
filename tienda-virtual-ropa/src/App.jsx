import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import './css/App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
