import { createContext, useState } from 'react'

export const DetailsContext = createContext()

export const DetailsProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [book, setBook] = useState({})
  const openDetails = (book) => {
    setBook(book)
    setShowDetails(true)
  }

  const closeDetails = () => {
    setShowDetails(false)
  }
  return (
    <DetailsContext.Provider value={{ showDetails, openDetails, closeDetails, book }}>
      {children}
    </DetailsContext.Provider>
  )
}
