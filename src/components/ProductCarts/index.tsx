/* eslint-disable no-console */
import { ProductCart, ProductCartProps } from './ProductCart'
import classes from './styles.module.scss'

console.log('classes', classes);

type ProductCartsProps = {
  products: ProductCartProps['product'][]
}

export const ProductCarts: React.FC<ProductCartsProps> = ({ products }) => {
  return (
    <div
      className={classes.productCarts}
    >
      {products.map((n) => (
        <ProductCart key={n.id} product={n} />
      ))}
    </div>
  )
}
