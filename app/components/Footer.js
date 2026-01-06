import React from 'react'

const Footer = () => {

  const currentYear =new Date().getFullYear();

  return (
    <div className='bg-slate-800 text-gray-300 flex items-center justify-center px-4 h-24'>
      <p className='text-center '>Copyright &copy; {currentYear} Get me a coffee - All rights reserved</p>
    </div>
  )
}

export default Footer
