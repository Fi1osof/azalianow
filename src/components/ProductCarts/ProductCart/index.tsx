/* eslint-disable no-console */
import { Product } from '../../../interfaces'
import { PriceFormat } from '../../formats/PriceFormat'
import classes from './styles.module.scss'

console.log('classes', classes)

export type ProductCartProps = {
  product: Product
}

export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className={classes.productCart}>
      <div className="image">
        <img src={product.image} />
      </div>

      <div className="content">
        <div>{product.category}</div>
        <div>{product.title}</div>
        <div>
          <PriceFormat value={product.price} /> ₽
        </div>
      </div>
    </div>
  )
}
