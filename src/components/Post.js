import React from 'react'
import Button from '@/components/Button'
const Post = ({title, body, author}) => {
  return (
    <div className="border border-gray-400 p-4 flex flex-col">
        <h1 className='font-bold text-xl'> {title} </h1>
        <span className='font-bold text-base mb-3'> by {author} </span>
        <p className='text-base '> {body} </p>
        <Button onClick={() => console.log(title)} text="view" />
    </div>
  )
}

export default Post