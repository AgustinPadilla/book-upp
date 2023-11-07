import React from 'react'
import { BookCard } from './BookCard'

export const BooksGrid = ({ books }) => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full xl:gap-3 md:p-10'>
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
