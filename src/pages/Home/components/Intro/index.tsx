import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroContainer, IntroList, IntroTitle, ListIcon } from './styles'
import coffeeImage from '../../../../assets/coffeeImage.svg'

export function Intro() {
  return (
    <IntroContainer>
      <IntroTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntroList>
          <li>
            <ListIcon iconColor="yellowDark">
              <ShoppingCart weight="fill" />
            </ListIcon>
            Compra simples e segura
          </li>
          <li>
            <ListIcon iconColor="gray">
              <Package weight="fill" />
            </ListIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <ListIcon iconColor="yellow">
              <Timer weight="fill" />
            </ListIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <ListIcon iconColor="purple">
              <Coffee weight="fill" />
            </ListIcon>
            O café chega fresquinho até você
          </li>
        </IntroList>
      </IntroTitle>

      <img src={coffeeImage} alt="" />
    </IntroContainer>
  )
}
