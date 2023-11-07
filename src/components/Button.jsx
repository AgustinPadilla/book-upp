import React from 'react'

export const Button = ({ children, ...props }) => {
  return (
    <button className='p-3 bg-darkbeige hover:bg-beige shadow-lg rounded-full' {...props}>{children}</button>
  )
}
