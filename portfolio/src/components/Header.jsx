import React from 'react'
import { ImGithub } from "react-icons/im";


const Header = () => {
  return (
    <header className='flex justify-between font-bold w-full items-center p-4 xl:px-10'>
      <h1 className=' text-2xl'>ポートフォリオ</h1>
      <ul>
        <li><a href="#" className='flex items-center px-2 gap-2'><ImGithub />GitHub</a></li>
      </ul>
    </header>
  )
}

export default Header