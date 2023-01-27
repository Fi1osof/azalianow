import { NumericFormat } from 'react-number-format'

type PriceFormatProps = {
  value: number
}

export const PriceFormat: React.FC<PriceFormatProps> = ({ value }) => {
  return <NumericFormat value={value} 
    displayType="text"
    thousandSeparator=" "
  />
}
