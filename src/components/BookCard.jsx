import React from 'react'
import { useReadList } from '../hooks/useReadList'
import { Thumbnail } from './thumbnail'

export const BookCard = ({ book }) => {
  const { addBookToList } = useReadList()

  const handleAddClick = () => {
    addBookToList(book)
  }

  return (
    <div className='flex items-center gap-2 bg-slate-700 rounded-md p-2 shadow-xl'>
      <picture className=''>
        <Thumbnail book={book} className='w-40 h-auto object-contain' />
      </picture>
      <div className='w-4/5 h-full flex flex-col justify-between'>
        <h3 className='font-bold text-xl mb-2 line-clamp-2'>{book.volumeInfo.title}</h3>
        <div className='flex flex-col'>
          <span className='inline-block'><strong>Author:</strong> {book.volumeInfo.authors || '-'}</span>
          <span className='inline-block'><strong>Date:</strong> {book.volumeInfo.publishedDate || '-'}</span>
        </div>
        <div className='flex items-center m-5 justify-around gap-1'>
          <button onClick={handleAddClick} className='p-3 bg-cyan-600 hover:bg-cyan-500 shadow-lg'>Add</button>
          <button className='p-3 bg-cyan-600 hover:bg-cyan-500 shadow-lg'>Details</button>
        </div>
      </div>
    </div>
  )
}
