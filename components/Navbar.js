import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
      <div className='logo font-bold text-lg'>GetMeaChai!</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li></li>
        <li></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
