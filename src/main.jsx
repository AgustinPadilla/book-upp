import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookProvider } from './context/books.jsx'
import { ReadListProvider } from './context/readList.jsx'
import { DetailsProvider } from './context/details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <DetailsProvider>
        <ReadListProvider>
          <App />
        </ReadListProvider>
      </DetailsProvider>
    </BookProvider>
  </React.StrictMode>
)
