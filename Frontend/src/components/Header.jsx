import React from 'react'

const Header = () => {
  return (
    <div className=' bg-black flex justify-between items-center px-20 py-4'>
        <div>
            <h1 className='text-white text-2xl font-bold'>Serendale</h1>
        </div>
        <div>
        <ul className='md:flex  space-x-4 text-white'>
            <li className='cursor-pointer'>Service</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            {/* <li>Login</li> */}
        </ul>
        </div>
    </div>
  )
}

export default Header