import { useContext } from 'react'
import { DetailsContext } from '../context/details'

export function useDetails () {
  const context = useContext(DetailsContext)

  if (context === null) {
    throw new Error('useDetails must be used whitin a DetailsProvider')
  }

  return context
}
