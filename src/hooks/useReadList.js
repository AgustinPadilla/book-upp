import { useContext } from 'react'
import { ReadListContext } from '../context/readList'

export const useReadList = () => {
  const context = useContext(ReadListContext)

  if (context === null) {
    throw new Error('useReadList must be used whitin a ReadListProvider')
  }

  return context
}
