
import { Outlet } from 'react-router-dom'
import './App.scss'
import { FilterProvider } from './contexts/FilterContext'


function App() {

 //'https://fakestoreapi.com/products'

  return (
    <>
    {/* <Products /> */}
   
    <Outlet />
  
    </>
  )
}

export default App
