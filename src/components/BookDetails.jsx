import React from 'react'
import { CloseIcon } from './icons/CloseIcon'
import { useDetails } from '../hooks/useDetails'

export const BookDetails = () => {
  const { closeDetails, book } = useDetails()
  return (
    <div className='fixed w-full h-full bg-gray-900 bg-opacity-60 z-30' onClick={closeDetails}>
      <div className='max-w-4xl h-fit p-10 fixed m-auto top-0 left-0 right-0 bottom-0 bg-lightbeige shadow-2xl' onClick={e => e.stopPropagation()}>
        <button className='absolute right-2 top-2' onClick={closeDetails}>
          <CloseIcon className='h-6 w-6 m-2' />
        </button>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-2xl mb-2 drop-shadow-md'>{book.volumeInfo.title}</h2>
          <div className='flex flex-col'>
            <span className='inline-block'><strong>Author:</strong> {book.volumeInfo.authors || '-'}</span>
            <span className='inline-block'><strong>Date:</strong> {book.volumeInfo.publishedDate || '-'}</span>
            <span className='inline-block'><strong>Pages:</strong> {book.volumeInfo.pageCount || '-'}</span>
            <span className='inline-block'><strong>Categories:</strong> {book.volumeInfo.categories || '-'}</span>
            <span><strong>Description:</strong></span>
            <p>{book.volumeInfo.description || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
