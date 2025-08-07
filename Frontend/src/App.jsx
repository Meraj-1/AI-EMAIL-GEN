import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmailGenerator from "./pages/EmailGenerator.jsx"
import Home from './pages/Home.jsx'

function App() {

  return (
   <div className='z-10'>
    <Home/>
    {/* <EmailGenerator/> */}
   </div>
  )
}

export default App
