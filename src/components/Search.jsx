import React, { useState } from 'react'
import { IconSearch } from './icons/IconSearch'
import { useBooks } from '../hooks/useBooks'

export const Search = () => {
  const { getBooks } = useBooks()
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
    <form onSubmit={handleSubmit} className='h-11 flex items-center mb-3'>
      <input type='text' value={search} onChange={handleChange} placeholder='Search' className='p-3 h-full shadow-lg text-black rounded-s-full px-5' />
      <button className='p-3 bg-darkbeige hover:bg-beige shadow-lg h-full pr-4 rounded-e-full'>
        <IconSearch />
      </button>
    </form>
  )
}
