import { useContext } from 'react'
import { BookContext } from '../context/books'

export function useBooks () {
  const context = useContext(BookContext)

  if (context === null) {
    throw new Error('useBooks must be used whitin a BooksProvider')
  }

  return context
}
