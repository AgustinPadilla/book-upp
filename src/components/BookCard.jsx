import React from 'react'
import { useReadList } from '../hooks/useReadList'
import { Thumbnail } from './thumbnail'
import { Button } from './Button'

export const BookCard = ({ book }) => {
  const { addBookToList } = useReadList()

  const handleAddClick = () => {
    addBookToList(book)
  }

  return (
    <div className='flex items-center gap-2 rounded-md p-2'>
      <picture className=''>
        <Thumbnail book={book} className='w-40 h-auto object-contain shadow-md shadow-gray-700' />
      </picture>
      <div className='w-4/5 h-full flex flex-col justify-between'>
        <h3 className='font-bold text-xl mb-2 line-clamp-2 drop-shadow-md'>{book.volumeInfo.title}</h3>
        <div className='flex flex-col'>
          <span className='inline-block'><strong>Author:</strong> {book.volumeInfo.authors || '-'}</span>
          <span className='inline-block'><strong>Date:</strong> {book.volumeInfo.publishedDate || '-'}</span>
        </div>
        <div className='flex items-center m-5 justify-around gap-1'>
          <Button onClick={handleAddClick} className='p-3 px-5 bg-darkbeige hover:bg-beige shadow-lg rounded-full '>Add</Button>
          <Button className='p-3 bg-darkbeige hover:bg-beige shadow-lg rounded-full'>Details</Button>
        </div>
      </div>
    </div>
  )
}
