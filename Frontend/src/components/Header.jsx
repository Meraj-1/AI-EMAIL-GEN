import React from 'react'

const Header = () => {
  return (
    <div className=' bg-black flex justify-between items-center px-20 py-4'>
        <div>
            <h1 className='text-white text-2xl font-bold'>AI Email Generator</h1>
        </div>
        <div>
        <ul className='flex space-x-4 text-white'>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
            <li>Footer</li>
            {/* <li>Login</li> */}
        </ul>
        </div>
    </div>
  )
}

export default Header