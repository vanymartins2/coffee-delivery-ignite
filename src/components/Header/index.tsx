import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  ButtonsContainer,
  CartButton,
  HeaderContainer,
  PinButton
} from './styles'

export function Header() {
  const { cartQuantity } = useContext(CoffeeShopContext)

  function handleClick() {
    if (cartQuantity === 0) {
      return toast.warn('Adicione seu café ao carrinho!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false
      })
    }
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Coffee delivery" />
      </NavLink>
      <ButtonsContainer>
        <PinButton>
          <MapPin size={22} weight="fill" />
          Viradouro, SP
        </PinButton>

        <NavLink to={cartQuantity === 0 ? '/' : '/checkout'}>
          <CartButton onClick={handleClick}>
            <ShoppingCart size={22} weight="fill" />
            <span>{cartQuantity}</span>
          </CartButton>
        </NavLink>
        <ToastContainer />
      </ButtonsContainer>
    </HeaderContainer>
  )
}
