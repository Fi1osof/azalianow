import { NextComponentType, NextPageContext } from 'next'

type PageProps = Record<string, never>

export type Page<P extends PageProps = PageProps, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
>

type Rating = {
  count: number
  rate: number
}

export type Product = {
  id: number
  title: string
  description: string
  image: string
  price: number
  category: string
  rating: Rating
}
