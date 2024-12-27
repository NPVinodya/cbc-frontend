import { useState } from 'react'
import testing from "./components/testing"
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import LoginPage from './Pages/loginPage'
import HomePage from './Pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <HomePage/>
    </>
  )
}

export default App
