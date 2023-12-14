
import { Outlet } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'


function App() {



  return (
    <>
  <Navbar />
    <Outlet />
  
    </>
  )
}

export default App
