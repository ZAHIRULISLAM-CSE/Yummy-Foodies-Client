import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/header/Nav'

function App() {

  return (
    <div className='w-[85%] mx-auto'>
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  )
}

export default App
