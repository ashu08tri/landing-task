"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const[toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  }

  return (
    <>
     <nav className="bg-gradient-to-r from-opacity-blue to-blue-600 h-16 md:h-24 flex justify-between items-center border-b-2 font-ubuntu border-blue-500">
     <div className="w-screen md:w-2/4 flex justify-start items-center">
      <div className="w-2/4 pl-6 md:hidden cursor-pointer text-white text-xl" onClick={toggleHandler}>
      {!toggle ?  <RxHamburgerMenu /> : <IoMdClose />}
      </div>
      
    <Link href='/' className="w-3/4 md:pl-28 flex justify-start items-center">
    <Image 
     src='/logo.png'
     width={120}
     height={120}
     alt="logo"
    /></Link>
    </div>
   
   <div className="w-3/4 hidden md:flex justify-between items-center">
   <ul className="flex justify-between w-72 text-white">
        <li><Link href='/publisher'>Publisher</Link></li>
        <li><Link href='/advertiser'>Advertiser</Link></li>
        <li><Link href='/task'>Task</Link></li>
    </ul>
    <div className="pr-28 flex gap-2">
        <button className="px-4 py-2 bg-white text-blue-600 border-none rounded-md font-medium">Get Free Demo</button>
        <button className="px-4 py-2 bg-transparent text-white border-solid border-2 rounded-md font-medium">Contact us</button>
    </div>
   </div>
    
   </nav>
   <div className='md:hidden transition-all duration-300 ease-in-out' style={{height: toggle ? '8rem' : '0', opacity: toggle ? 1 : 0}}>
                <ul className='py-2 font-bold text-gray-600 transition-all duration-200 ease-in'>
                  <li className="py-2 px-4"><Link href='/publisher'>Publisher</Link></li>
                  <li className="py-2 px-4"><Link href='/advertiser'>Advertiser</Link></li>
                  <li className="py-2 px-4"><Link href='/task'>Task</Link></li>
                </ul>
        </div>
    </>
  )
}

export default Navbar;