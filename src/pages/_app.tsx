/* eslint-disable no-console */
import { useProducts } from '../hooks/useProducts'

import type { AppProps } from 'next/app'
import { AppContext, AppContextValue } from '../context/AppContext'
import { useMemo } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const products = useProducts()

  console.log('products', products)

  const context = useMemo<AppContextValue>(() => {
    return {
      cartProducts: products || [],
      favoriteProducts: [],
    }
  }, [products])

  return (
    <AppContext.Provider value={context}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
