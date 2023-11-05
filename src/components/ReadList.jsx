import React from 'react'
import { useReadList } from '../hooks/useReadList'
import { Thumbnail } from './thumbnail'

export const ReadList = () => {
  const { readList, removeBookFromList } = useReadList()
  return (
    <div className='min-h-full w-80 flex flex-col items-center gap-3 p-2 bg-slate-700 text-md font-semibold'>
      <h2 className='text-2xl font-bold shadow-2xl m-4'>Read List</h2>
      {readList.map(book => {
        return (
          <div key={book.id} className='flex gap-5 h-32 w-full'>
            <Thumbnail book={book} className='w-20 h-auto object-contain bg-black bg-opacity-10' />
            <div className='flex flex-col justify-between'>
              <span className='font-bold mb-2 line-clamp-2'>{book.volumeInfo.title}</span>
              <div>
                <button onClick={() => removeBookFromList(book)} className='p-3'>Remove</button>
                <button className='p-3'>Done</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
