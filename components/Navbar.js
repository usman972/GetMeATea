import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex  justify-between px-4 h-16 items-center">
      <div className="logo flex justify-center items-center font-bold text-lg">
        <img src="/tea3.gif" width={44} alt=""></img>
        <span>GetMeATea!</span>{" "}
      </div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li></li>
      </ul> */}
      <div>
        <Link href={"/login"}> 
        
      <button
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Login
      </button>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
