import { useState } from 'react'
import './App.css'
import Success from './Pages/Success'
import Home from './Pages/Home'
import Error from './Pages/Error'
import {BrowserRouter,Routes,Router, Route,} from 'react-router-dom'
import ProtectedRoute from './Component/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
    <Route path='/*' element={<Error/>}></Route>

      </Routes>
    </BrowserRouter>
      {/* <p>food ordering app</p> */}

    </>
  )
}

export default App
