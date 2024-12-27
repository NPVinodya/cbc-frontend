import { useState } from 'react'
import testing from "./components/testing"
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import LoginPage from './Pages/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <LoginPage/>
    </>
  )
}

export default App
