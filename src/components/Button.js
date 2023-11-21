import React from 'react'

const Button = ({ text}) => {
  return (
    <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 text-center'>{text}</div>
  )
}

export default Button