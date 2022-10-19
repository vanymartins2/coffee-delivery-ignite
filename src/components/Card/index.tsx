import { useContext } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeShopContext, Product } from '../../context/CoffeeShopContext'
import { formatPrice } from '../../utils/formatPrice'

import {
  AddToCart,
  CardButton,
  CardContainer,
  CardFooter,
  CardLabel,
  CardTag,
  CardTitle,
  PriceTag,
  QuantityButton,
  Types
} from './styles'

interface CardProps extends Product {}

export function Card({
  id,
  imgUrl,
  title,
  description,
  type,
  price
}: CardProps) {
  const tagArray = Array.isArray(type)

  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } =
    useContext(CoffeeShopContext)

  const quantity = getItemQuantity(id)

  return (
    <CardContainer>
      <img src={imgUrl} alt="" />

      <Types>
        {tagArray ? (
          type.map((item, idx) => <CardTag key={idx}>{item}</CardTag>)
        ) : (
          <CardTag>{type}</CardTag>
        )}
      </Types>

      <CardTitle>{title}</CardTitle>
      <CardLabel>{description}</CardLabel>

      <CardFooter>
        <PriceTag>
          R$<span>{formatPrice(price)}</span>
        </PriceTag>

        <QuantityButton>
          <CardButton onClick={() => decreaseItemQuantity(id)}>
            <Minus size={14} weight="bold" />
          </CardButton>
          <span>{quantity}</span>
          <CardButton onClick={() => increaseItemQuantity(id)}>
            <Plus size={14} weight="bold" />
          </CardButton>
        </QuantityButton>

        <AddToCart onClick={() => increaseItemQuantity(id)}>
          <ShoppingCart size={22} weight="fill" />
        </AddToCart>
      </CardFooter>
    </CardContainer>
  )
}
