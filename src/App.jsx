
import { useBooks } from './hooks/useBooks'
import { ReadList } from './components/ReadList'
import { BooksGrid } from './components/BooksGrid'
import { Search } from './components/Search'

function App () {
  const { books } = useBooks()

  return (
    <main className='w-full min-h-screen flex justify-around text-amber-950 relative'>
      <div className='flex flex-col items-center flex-grow'>
        <div className='max-w-6xl bg-lightbeige h-full mx-3 md:mx-0 md:w-10/12 shadow-2xl flex flex-col items-center my-10 rounded-3xl'>
          <h1 className='text-5xl font-bold  m-10 drop-shadow-md'>Book Upp!</h1>
          <Search />
          {books.length < 1
            ? <h2 className='my-5 text-xl'>Busca tus libros favoritos!</h2>
            : <BooksGrid books={books} />}
        </div>
      </div>
      <ReadList />
    </main>
  )
}

export default App
