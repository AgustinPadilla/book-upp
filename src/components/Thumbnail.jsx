import React from 'react'

export const Thumbnail = ({ book, ...props }) => {
  return (
    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : './image-placeholder.webp'} {...props} alt='' />
  )
}
