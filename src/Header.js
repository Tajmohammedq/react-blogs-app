import React from 'react'
import { FaLaptop,FaTabletAlt,FaMobileAlt } from 'react-icons/fa'
import DataContext from './context/DataContext'
import { useContext } from 'react'

function Header() {
  const {width}=useContext(DataContext)
  return (
    <header className='bg-primary fs-2 text-white d-flex justify-content-between  '>
      <p className='mt-1 ms-5'>React Project</p>
      {width<768 ? <FaMobileAlt className='mt-3 me-4 fs-1' />:width<992?<FaTabletAlt className='mt-3 me-4 fs-1'></FaTabletAlt>:<FaLaptop className='mt-3 me-4 fs-1'></FaLaptop>}
    </header>
  )
}

export default Header
