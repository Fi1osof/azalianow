import Image from 'next/image'
import { Product } from '../../../interfaces'
import { PriceFormat } from '../../formats/PriceFormat'
import classes from './styles.module.scss'

export type ProductCartProps = {
  product: Product
}

export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className={classes.productCart}>
      <div className="image">
        <Image 
          src={product.image}
          alt={product.title}
          width={300}
          height={225}
        />
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
