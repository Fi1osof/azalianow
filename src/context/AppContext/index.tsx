import { createContext } from 'react'
import { Product } from '../../interfaces'

export type AppContextValue = {
  cartProducts: Product[]
  favoriteProducts: Product[]
}

export const AppContext = createContext<AppContextValue | null>(null)
