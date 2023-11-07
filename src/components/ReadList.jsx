import React, { useState } from 'react'
import { useReadList } from '../hooks/useReadList'
import { Thumbnail } from './Thumbnail'
import { ReadListIcon } from './icons/ReadListIcon'
import { CloseIcon } from './icons/CloseIcon'

export const ReadList = () => {
  const { readList, removeBookFromList } = useReadList()
  const [hidden, setHidden] = useState(true)
  const toggleSideBar = () => {
    setHidden(!hidden)
  }

  return (
    <div className='fixed right-0'>
      <button onClick={toggleSideBar} className='absolute z-10 top-0 right-4 md:-left-12 mt-5 text-2xl bg-lightbeige p-2 rounded-full shadow-2xl md:opacity-90 hover:opacity-100'>
        {hidden ? <ReadListIcon /> : <CloseIcon />}
      </button>
      <div className={`h-screen md:w-80 relative shadow-xl gap-3 p-2 bg-lightbeige md:bg-opacity-90 text-md overflow-auto font-semibold ${hidden && 'hidden'}`}>
        <h2 className='text-2xl font-bold drop-shadow-2xl my-4 w-full text-center'>Read List</h2>
        <div className='flex flex-col-reverse gap-2 items-center'>
          {readList.map(book => {
            return (
              <div key={book.id} className='flex gap-5 h-32 w-full'>
                <Thumbnail book={book} className='w-20 h-auto object-contain' />
                <div className='flex flex-col justify-between'>
                  <span className='font-bold mb-2 line-clamp-2 px-3'>{book.volumeInfo.title}</span>
                  <div>
                    <button onClick={() => removeBookFromList(book)} className='p-3 hover:text-red-600'>Remove</button>
                    <button className='p-3 hover:text-green-600'>Done</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
