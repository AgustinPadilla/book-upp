import { Search } from './components/search'
import { BookCard } from './components/bookCard'
import { useBooks } from './hooks/useBooks'
import { ReadList } from './components/ReadList'

function App () {
  const { books } = useBooks()

  return (
    <main className='w-full min-h-screen flex justify-around text-white relative'>
      <div className='flex flex-col items-center flex-grow'>
        <h1 className='text-3xl font-bold shadow-2xl m-10'>Book Upp!</h1>
        <Search />
        <div className='max-w-6xl bg-slate-800 w-10/12 shadow-2xl'>
          <div className='grid grid-cols-3 w-full gap-3 p-10'>
            {books.map(book => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                />
              )
            })}
          </div>
        </div>
      </div>
      <ReadList />
    </main>
  )
}

export default App
