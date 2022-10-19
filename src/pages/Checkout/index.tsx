import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CoffeeShopContext } from '../../context/CoffeeShopContext'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'

import { Cart } from '../../components/Cart'
import {
  Address,
  AddressContainer,
  CartContainer,
  CheckoutContainer,
  ErrorContainer,
  Input,
  PaymentContainer,
  StyledError,
  StyledRadioGroup,
  StyledRadioItem,
  Subtitle,
  Title
} from './styles'

const requestFormValidationSchema = zod.object({
  postcode: zod.string().min(8, 'Informe um CEP válido'),
  street: zod.string().min(6, 'Informe a rua para entrega'),
  house_number: zod.string().min(1, 'Informe o número da casa'),
  complement: zod.string().optional(),
  district: zod.string().min(4, 'Informe o bairro'),
  city: zod.string().min(5, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o estado'),
  payment: zod.string().min(1, 'Escolha um método de pagamento')
})

type RequestFormData = zod.infer<typeof requestFormValidationSchema>

export function Checkout() {
  const { createDeliveryRequest } = useContext(CoffeeShopContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestFormValidationSchema),
    defaultValues: {
      postcode: '',
      street: '',
      house_number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      payment: ''
    }
  })

  function handleRequestSubmit(data: RequestFormData) {
    createDeliveryRequest(data)
    reset()
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleRequestSubmit)}>
      <Title>Complete seu pedido</Title>

      <AddressContainer>
        <Subtitle subtitleColor="yellow">
          <span>
            <MapPinLine size={22} />
          </span>
          <div>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Subtitle>
        <Address>
          <Input placeholder="CEP" {...register('postcode')} />
          {errors.postcode && (
            <StyledError>{errors.postcode.message}</StyledError>
          )}

          <Input placeholder="Rua" {...register('street')} />
          {errors.street && <StyledError>{errors.street.message}</StyledError>}

          <div data-required="Opcional">
            <Input placeholder="Número" {...register('house_number')} />
            <Input placeholder="Complemento" {...register('complement')} />
          </div>
          {errors.house_number && (
            <StyledError>{errors.house_number.message}</StyledError>
          )}

          <div>
            <Input placeholder="Bairro" {...register('district')} />
            <Input placeholder="Cidade" {...register('city')} />
            <Input placeholder="UF" {...register('state')} />
          </div>
          <ErrorContainer>
            {errors.district && (
              <StyledError>{errors.district.message}</StyledError>
            )}
            {errors.city && <StyledError>{errors.city.message}</StyledError>}
            {errors.state && <StyledError>{errors.state.message}</StyledError>}
          </ErrorContainer>
        </Address>
      </AddressContainer>
      <PaymentContainer>
        <Subtitle subtitleColor="purple">
          <span>
            <CurrencyDollar size={22} />
          </span>
          <div>
            <h2>Pagamento</h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Subtitle>
        <StyledRadioGroup>
          <StyledRadioItem>
            <input
              type="radio"
              value="credit"
              id="credit"
              {...register('payment')}
            />
            <label htmlFor="credit">
              <span>
                <CreditCard size={16} />
              </span>
              Cartão de crédito
            </label>
          </StyledRadioItem>
          <StyledRadioItem>
            <input
              type="radio"
              value="debit"
              id="debit"
              {...register('payment')}
            />
            <label htmlFor="debit">
              <span>
                <Bank size={16} />
              </span>
              Cartão de débito
            </label>
          </StyledRadioItem>
          <StyledRadioItem>
            <input
              type="radio"
              value="cash"
              id="cash"
              {...register('payment')}
            />
            <label htmlFor="cash">
              <span>
                <Money size={16} />
              </span>
              Dinheiro
            </label>
          </StyledRadioItem>
        </StyledRadioGroup>
        {errors.payment && <StyledError>{errors.payment.message}</StyledError>}
      </PaymentContainer>

      <Title>Cafés selecionados</Title>
      <CartContainer>
        <Cart />
      </CartContainer>
    </CheckoutContainer>
  )
}
