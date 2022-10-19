import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 1.25rem;

  background: ${props => props.theme['base-card']};
  border-radius: 4px;

  img {
    width: 4rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 1.25rem;
`

export const ItemTitle = styled.p`
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveItemButton = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};
  cursor: pointer;

  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  border-radius: 4px;
  background: ${props => props.theme['base-button']};

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  span {
    color: ${props => props.theme.purple};
  }
`
export const CartItemPrice = styled.span`
  font-weight: 700;
  color: ${props => props.theme['base-text']};
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;
  background: ${props => props.theme['base-button']};
`
