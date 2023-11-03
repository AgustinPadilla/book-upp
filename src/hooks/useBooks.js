import { useState } from 'react'
// import { items } from '../mock/books.json'

export function useBooks () {
  const [books, setBooks] = useState([])

  const getBooks = (search) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(response => response.json())
      .then(data => {
        const { items } = data
        setBooks(items)
      })
  }

  return [books, getBooks]
}
