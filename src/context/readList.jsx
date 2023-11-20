import { createContext, useEffect, useState } from 'react'

export const ReadListContext = createContext()

export const ReadListProvider = ({ children }) => {
  const [readList, setReadList] = useState(JSON.parse(localStorage.getItem('readList')))

  useEffect(() => {
    localStorage.setItem('readList', JSON.stringify(readList))
  }, [readList])

  const addBookToList = (book) => {
    if (!isInReadList(book)) {
      setReadList(prevState => ([
        ...prevState,
        {
          ...book
        }
      ]))
    }
  }

  const removeBookFromList = (book) => {
    const newList = readList.filter(item => item.id !== book.id)
    setReadList(newList)
  }

  const isInReadList = (book) => {
    const index = readList.findIndex(item => item.id === book.id)
    return index >= 0
  }

  return (
    <ReadListContext.Provider value={{ readList, addBookToList, removeBookFromList }}>
      {children}
    </ReadListContext.Provider>
  )
}
