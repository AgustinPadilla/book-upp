export const searchBooks = async (search) => {
  const books = fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    .then(response => response.json())
    .then(data => data.items)
  return books
}
