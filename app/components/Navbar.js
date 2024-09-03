import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-900 text-white  flex justify-between px-4 h-16 items-center'>
        <div className="logo font-bold text-lg flex justify-center items-center">
            <img src="tea.gif" width={60} alt="" />

          <span>  GetMeATea!</span>
        </div>
        <ul className='flex justify-between gap-4 '>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
