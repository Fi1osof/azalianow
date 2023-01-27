/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { Product } from '../../interfaces'

const ExtRate = 70

export const useProducts = () => {
  const [data, dataSetter] = useState<Product[] | null | undefined>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json: Product[] | null) => {
        console.log('json', json)

        if (Array.isArray(json)) {
          const products = json.map((n) => {
            return {
              ...n,
              price: Math.round(n.price * ExtRate),
            }
          })

          dataSetter(products)
        }
      })
      .catch((error) => {
        console.error(error)

        dataSetter(null)
      })
  }, [])

  return data
}
