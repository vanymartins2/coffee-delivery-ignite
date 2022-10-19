import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'
import { formatCartPrice } from '../../utils/formatCartPrice'
import { CardButton, QuantityButton } from '../Card/styles'
import {
  ButtonsContainer,
  CartItemContainer,
  CartItemInfo,
  CartItemPrice,
  ItemTitle,
  Divider,
  RemoveItemButton
} from './styles'

interface CartItemProps {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    products
  } = useContext(CoffeeShopContext)

  const item = products.find(item => item.id === id)

  if (item == null) return null

  return (
    <>
      <CartItemContainer>
        <CartItemInfo>
          <img src={item.imgUrl} alt="" />

          <div>
            <ItemTitle>{item.title}</ItemTitle>

            <ButtonsContainer>
              <QuantityButton>
                <CardButton onClick={() => decreaseItemQuantity(item.id)}>
                  <Minus size={14} weight="bold" />
                </CardButton>
                <span>{quantity}</span>
                <CardButton onClick={() => increaseItemQuantity(item.id)}>
                  <Plus size={14} weight="bold" />
                </CardButton>
              </QuantityButton>

              <RemoveItemButton onClick={() => removeItemFromCart(item.id)}>
                <span>
                  <Trash size={16} />
                </span>
                Remover
              </RemoveItemButton>
            </ButtonsContainer>
          </div>
        </CartItemInfo>

        <CartItemPrice>{formatCartPrice(item.price)}</CartItemPrice>
      </CartItemContainer>

      <Divider />
    </>
  )
}
