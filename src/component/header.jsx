import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header class="flex justify-between px-4 py-2 bg-secondary">
      <a className="font-bold  text-black" href="#">Suresh T</a>
      <nav className="hidden md:block">
        <ul class="flex text-white" >
          <li><a href="#" >About me</a></li>
          <li><a href="#" >Projects</a></li>
          <li><a href="#" >Resume</a></li>
          <li><a href="#" >Contact</a></li>
        </ul>
      </nav>

      {toggleMenu && <nav className="block md:hidden ">
        <ul class="flex flex-col text-white mobile-nav" >
          <li><a href="#" >About me</a></li>
          <li><a href="#" >Projects</a></li>
          <li><a href="#" >Resume</a></li>
          <li><a href="#" >Contact</a></li>
        </ul>
      </nav>
      }
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white5 h-4" /></button>
    </header>

  )
}
