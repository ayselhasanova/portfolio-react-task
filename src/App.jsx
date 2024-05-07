import './App.css'
import { Route, Routes } from 'react-router'
import Contacts from './components/Contacts'
import Examples from './components/Examples'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
     <Routes>
      <Route element={<Home />} path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Examples />} path='/examples' />
        <Route element={<Contacts />} path='/contacts' />
      </Routes>
    </>
  )
}

export default App
