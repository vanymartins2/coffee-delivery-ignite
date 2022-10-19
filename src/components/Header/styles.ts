import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
`
export const PinButton = styled(BaseButton)`
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
`

export const CartButton = styled(BaseButton)`
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  position: relative;

  span {
    width: 20px;
    height: 20px;
    right: -0.522rem;
    top: -0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;

    color: ${props => props.theme.white};

    background: ${props => props.theme['yellow-dark']};
    border-radius: 1000px;
    position: absolute;
  }
`
