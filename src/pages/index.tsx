/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import React, { useContext } from 'react'
import { ProductCarts } from '../components/ProductCarts'
import { AppContext } from '../context/AppContext'
import { Page } from '../interfaces'

const MainPage: Page = () => {
  const context = useContext(AppContext)

  console.log('context', context)

  return (
    <>
      <NextSeo title="Цветочки" />

      {context?.cartProducts && (
        <ProductCarts products={context.cartProducts} />
      )}
    </>
  )
}

export default MainPage
