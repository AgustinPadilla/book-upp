import React from 'react'
import { BookCard } from './bookCard'

export const BooksGrid = ({ books }) => {
  return (
    <div className='grid grid-cols-3 w-full gap-3 p-10'>
      {books.map(book => {
        return (
          <BookCard
            key={book.id}
            book={book}
          />
        )
      })}
    </div>
  )
}
