import { Search } from './components/search'
import { BookCard } from './components/bookCard'
import { useContext } from 'react'
import { BookContext } from './context/books'

function App () {
  const { books } = useContext(BookContext)

  return (
    <main className='w-full flex flex-col items-center text-white'>
      <h1 className='text-3xl font-bold shadow-2xl m-10'>Book Upp!</h1>
      <Search />
      <div className='max-w-6xl bg-slate-800 w-10/12 shadow-2xl'>
        <div className='grid grid-cols-3 w-full gap-3 p-10'>
          {books.map(book => {
            return (
              <BookCard
                key={book.id}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : './image-placeholder.webp'}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                publishedDate={book.volumeInfo.publishedDate}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
