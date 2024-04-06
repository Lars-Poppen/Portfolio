import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between bg-slate-600 w-screen h-10'>
      <h1>Header</h1>
      <Navbar/>
    </div>
  )
}

export default Header
