import { createContext } from 'react'
import { useBooks } from '../hooks/useBooks'

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [books, getBooks] = useBooks()

  return (
    <BookContext.Provider value={{ books, getBooks }}>
      {children}
    </BookContext.Provider>
  )
}
