import React from 'react'

export const BookCard = ({ image, title, authors, publishedDate }) => {
  return (
    <div className='flex items-center gap-2 bg-slate-700 rounded-md p-2 shadow-xl'>
      <picture className=''>
        <img className='w-40 h-auto' src={image} alt='' />
      </picture>
      <div className='w-4/5 h-full flex flex-col justify-between'>
        <h3 className='font-bold text-xl mb-2 line-clamp-2'>{title}</h3>
        <div>
          <span className='inline-block'><strong>Author:</strong> {authors}</span>
          <span className='inline-block'><strong>Year:</strong> {publishedDate}</span>
        </div>
        <div className='flex flex-col items-center m-5 place-self-end'>
          <button className='p-3 bg-cyan-600 hover:bg-cyan-500 shadow-lg'>Agregar a la Lista</button>
        </div>
      </div>
    </div>
  )
}
