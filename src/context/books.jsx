import { createContext, useState } from 'react'
import { searchBooks } from '../utilities/searchBooks'

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const getBooks = async (search) => {
    if (search === '') return
    searchBooks(search).then(response => {
      setBooks(response)
    })
  }
  return (
    <BookContext.Provider value={{ books, getBooks }}>
      {children}
    </BookContext.Provider>
  )
}
