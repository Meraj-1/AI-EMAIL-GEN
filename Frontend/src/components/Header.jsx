import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // you can use heroicons or any icon set

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-black text-white'>
      <div className='flex justify-between items-center px-6 py-4 md:px-20'>
        {/* Logo */}
        <h1 className='text-2xl font-bold'>Serendale</h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6'>
          <Link to='/service'><li className='cursor-pointer'>Service</li></Link>
          <Link to='/about'><li className='cursor-pointer'>About</li></Link>
          <Link to='/contact'><li className='cursor-pointer'>Contact</li></Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md: h-full bg-black border-t border-gray-700'>
          <ul className='flex flex-col space-y-4 px-6 py-4'>
            <Link to='/service' onClick={() => setMenuOpen(false)}>
              <li className='cursor-pointer'>Service</li>
            </Link>
            <Link to='/about' onClick={() => setMenuOpen(false)}>
              <li className='cursor-pointer'>About</li>
            </Link>
            <Link to='/contact' onClick={() => setMenuOpen(false)}>
              <li className='cursor-pointer'>Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
