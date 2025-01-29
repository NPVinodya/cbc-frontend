import { useState } from 'react'
import testing from "./components/testing"
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import LoginPage from './Pages/loginPage'
import HomePage from './Pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <BrowserRouter>
    <Routes path = "/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/Signup" element={<signinPage.jsx/>}/>
    <Route path="/*" element={<h1>404 error</h1>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
