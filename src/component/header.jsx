import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header class="about-nav flex justify-between px-4 py-2 ">
      <a className="font-bold text-2xl  text-black" href="#">Suresh T</a>
      <nav className="hidden md:block">
        <ul class=" nav-bar flex text-[19px] text-white" >
          <li><a href="/" >Home</a></li>
          <li><a href="#about" >About me </a></li>
          <li><a href="#project" >Projects</a></li>
          <li><a href="#resume" >Resume</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </nav>

      {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={() =>setToggleMenu(!toggleMenu)} class=" nav-bar flex flex-col text-white mobile-nav" >
      <li><a href="/" >Home</a></li>
          <li><a href="#about" >About me </a></li>
          <li><a href="#project" >Projects</a></li>
          <li><a href="#resume" >Resume</a></li>
          <li><a href="#contact" >Contact</a></li>
      
        </ul>
      </nav>
      }
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white5 h-4" /></button>
    </header>

  )
}
