import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookProvider } from './context/books.jsx'
import { ReadListProvider } from './context/readList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <ReadListProvider>
        <App />
      </ReadListProvider>
    </BookProvider>
  </React.StrictMode>
)
