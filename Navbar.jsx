import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {

  const[show,setShow] = useState(false);

  useEffect(()=>{
    if(show){
      document.body.style.overflow='hidden'
    }
    else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    }
  })

  return (
    <div className='absolute top-[10px] left-0 w-full z-10  '>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white '>
          <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400 '>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400 '>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 '>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full backdrop:blur-lg'>Sign up</button>
        <img onClick={()=>{
          setShow(true);
        }}src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      <div className={`md:hidden ${show ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden h-screen bg-white transition-all`}>
        <div className='flex justify-end p-6'>
          <img onClick={()=>{
            setShow(false);
          }}
           src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col  items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <li><a onClick={()=>{
            setShow(false);
          }}href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a></li>
          <li><a onClick={()=>{
            setShow(false);
          }}href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a></li>
          <li><a onClick={()=>{
            setShow(false);
          }}href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a></li>
          <li><a onClick={()=>{
            setShow(false);
          }}href="#About" className='px-4 py-2 rounded-full inline-block'>About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
