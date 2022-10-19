import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.5rem;
  gap: 1.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const EmptyCart = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${props => props.theme['base-label']};
  text-align: center;
  margin-bottom: 1.5rem;
`

export const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`
export const Total = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${props => props.theme['base-text']};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`
export const Amount = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${props => props.theme['base-text']};
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`
