import React, { useContext, useState } from 'react'
import { IconSearch } from './icons/IconSearch'
import { BookContext } from '../context/books'

export const Search = () => {
  const { getBooks } = useContext(BookContext)
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    getBooks(search)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }
  return (
    <form onSubmit={handleSubmit} className='h-11 flex items-center'>
      <input type='text' value={search} onChange={handleChange} placeholder='Buscar' className='p-3 h-full shadow-lg text-black' />
      <button className='p-3 bg-cyan-600 hover:bg-cyan-500 shadow-lg h-full'>
        <IconSearch />
      </button>
    </form>
  )
}
