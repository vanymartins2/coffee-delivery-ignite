import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-areas: 'title title' 'address cart' 'payment cart';
  grid-column-gap: 2rem;
  grid-row-gap: 0.75rem;
`

const BasicContainer = styled.div`
  min-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${props => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressContainer = styled(BasicContainer)`
  grid-area: address;
`
export const PaymentContainer = styled(BasicContainer)`
  grid-area: payment;
`
export const CartContainer = styled.div`
  min-width: 28rem;
  grid-area: cart;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  text-align: left;
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 0.938rem;
  margin-top: 2.5rem;
`
const FORM_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple'
} as const

interface SubtitleProps {
  subtitleColor: keyof typeof FORM_COLORS
}

export const Subtitle = styled.div<SubtitleProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${props => props.theme['base-subtitle']};

  span {
    color: ${props => props.theme[FORM_COLORS[props.subtitleColor]]};
  }

  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
  }
`

export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input:nth-child(2) {
    align-self: stretch;
  }

  div:nth-of-type(1) {
    display: flex;
    gap: 0.75rem;
    width: 100%;
    position: relative;

    input:nth-of-type(1) {
      flex-grow: 0;
    }

    input:nth-of-type(2) {
      flex-grow: 1;
    }

    &::after {
      content: attr(data-required);
      position: absolute;
      font-size: 0.75rem;
      line-height: 130%;
      font-style: italic;
      color: ${props => props.theme['base-label']};
      top: 35%;
      right: 0;
      margin-right: 0.75rem;
    }
  }

  div:nth-of-type(2) {
    display: flex;
    gap: 0.75rem;
    width: 100%;

    input:nth-of-type(2) {
      flex: 1;
    }

    input:nth-of-type(3) {
      width: 3.75rem;
    }
  }
`

export const Input = styled.input`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${props => props.theme['base-text']};
  padding: 0.75rem;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${props => props.theme['yellow-dark']};

    &::placeholder {
      color: transparent;
    }
  }
`
export const StyledRadioGroup = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.75rem;

  label,
  input {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: absolute;
  }

  input {
    opacity: 0.01;
    z-index: 100;
  }

  input:checked + label {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme.purple};
    border-radius: 6px;
  }

  label {
    width: 11.167rem;
    height: 3rem;
    padding: 1rem;
    left: 0;
  }
`

export const StyledRadioItem = styled.li`
  width: 11.167rem;
  height: 3rem;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};
  padding: 1rem;
  border-radius: 6px;
  background: ${props => props.theme['base-button']};
  cursor: pointer;

  display: flex;
  align-items: center;
  position: relative;

  span {
    display: flex;
    color: ${props => props.theme.purple};
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  label > input[type='radio']:checked {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme.purple};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.white};
  cursor: pointer;

  padding: 0.75rem 0.5rem;
  border: 0;
  background: ${props => props.theme.yellow};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
`

export const StyledError = styled.p`
  font-size: 0.75rem;
  color: orangered;
`
