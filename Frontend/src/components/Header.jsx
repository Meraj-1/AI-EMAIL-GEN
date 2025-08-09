import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-black flex justify-between items-center px-20 py-4'>
        <div>
            <h1 className='text-white text-2xl font-bold'>Serendale</h1>
        </div>
        <div>
        <ul className='md:flex  space-x-4 text-white'>
           <Link to='/service'> <li className='cursor-pointer'>Service</li></Link>
           <Link to='/about'> <li className='cursor-pointer'>About</li> </Link>
            <Link to='/contact'><li className='cursor-pointer'>Contact</li></Link>
            {/* <li>Login</li> */}
        </ul>
        </div>
    </div>
  )
}

export default Header