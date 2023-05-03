import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/header/Nav'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className=''>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default App
