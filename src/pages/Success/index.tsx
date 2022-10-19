import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import illustration from '../../assets/illustration.svg'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'
import { ListIcon } from '../Home/components/Intro/styles'
import { InfoContainer, InfoList, SuccessContainer, Title } from './styles'

export function Success() {
  const { currentRequest } = useContext(CoffeeShopContext)

  function formatPaymentMethod(paymentMethod: string | undefined) {
    switch (paymentMethod) {
      case 'credit':
        paymentMethod = 'Cartão de crédito'
        break

      case 'debit':
        paymentMethod = 'Cartão de débito'
        break

      case 'cash':
        paymentMethod = 'Dinheiro'
        break
    }

    return paymentMethod
  }

  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <InfoContainer>
        <InfoList>
          <li>
            <ListIcon iconColor="purple">
              <MapPin weight="fill" size={16} />
            </ListIcon>
            <p>
              Entrega em{' '}
              <strong>
                {currentRequest?.street}, {currentRequest?.house_number}
              </strong>
              <br />
              <span>
                {currentRequest?.city} - {currentRequest?.state}
              </span>
            </p>
          </li>

          <li>
            <ListIcon iconColor="yellow">
              <Timer size={16} />
            </ListIcon>
            <p>
              Previsão de entrega
              <br />
              <span>
                <strong>20min - 30min</strong>
              </span>
            </p>
          </li>

          <li>
            <ListIcon iconColor="yellowDark">
              <CurrencyDollar size={16} />
            </ListIcon>
            <p>
              Pagamento na entrega
              <br />
              <span>
                <strong>{formatPaymentMethod(currentRequest?.payment)}</strong>
              </span>
            </p>
          </li>
        </InfoList>
      </InfoContainer>

      <div>
        <img src={illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
