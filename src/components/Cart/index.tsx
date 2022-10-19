import { useContext } from 'react'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'
import { ConfirmButton } from '../../pages/Checkout/styles'
import { formatCartPrice } from '../../utils/formatCartPrice'
import { CartItem } from '../CartItem'
import { Amount, CartInfo, Container, EmptyCart, Total } from './styles'

export function Cart() {
  const { cartItems, products } = useContext(CoffeeShopContext)

  const totalItemsAmount = cartItems.reduce((total, cartItem) => {
    const item = products.find(item => item.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  const deliveryPrice = 2.0

  return (
    <Container>
      {cartItems.length > 0 ? (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      ) : (
        <EmptyCart>Adicione um produto ao carrinho</EmptyCart>
      )}

      <CartInfo>
        <Total>
          <p>Total de itens</p>
          <p>Entrega</p>
          <p>Total</p>
        </Total>

        <Amount>
          <p>{formatCartPrice(totalItemsAmount)}</p>
          <p>{formatCartPrice(deliveryPrice)}</p>
          <p>{formatCartPrice(totalItemsAmount + deliveryPrice)}</p>
        </Amount>
      </CartInfo>

      <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
    </Container>
  )
}
